/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service.impl;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashSet;
import zw.co.techtrendz.techtrendzapi.service.ProductItemService;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.function.Predicate;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import zw.co.techtrendz.techtrendzapi.entity.Cart;
import zw.co.techtrendz.techtrendzapi.entity.Product;
import zw.co.techtrendz.techtrendzapi.entity.ProductItem;
import zw.co.techtrendz.techtrendzapi.entity.ProductStatus;
import zw.co.techtrendz.techtrendzapi.entity.Users;
import zw.co.techtrendz.techtrendzapi.repository.CartDao;
import zw.co.techtrendz.techtrendzapi.service.CartService;
import zw.co.techtrendz.techtrendzapi.service.ProductService;
import zw.co.techtrendz.techtrendzapi.service.UserService;

/**
 *
 * @author smadzudzo
 */
@Service
public class CartServiceImpl implements CartService {

    @Autowired
    private CartDao cartDao;
    @Autowired
    private UserService userService;
    @Autowired
    private ProductItemService productItemService;
    @Autowired
    private ProductService productService;

    public Cart saveCart(Cart cart) {
        return cartDao.save(cart);
    }

    public Optional<Cart> getCartById(long id) {
        return cartDao.findById(id);
    }

    public List<Cart> getCartAll() {
        return cartDao.findAll();
    }

    public Optional<Cart> getCartByUserId(long userId) {
        Users user = new Users(userId);
        Cart cart = new Cart();
        cart.setUser(user);
        Example<Cart> cartExample = Example.of(cart);
        return cartDao.findOne(cartExample);
    }

    public List<Cart> cartsWithProductItem(long productItemId) {
        List<ProductItem> productItems = Arrays.asList(new ProductItem(productItemId));
        Cart cart = new Cart();
        cart.setProductItems(Set.copyOf(productItems));
        Example<Cart> cartExample = Example.of(cart);
        Sort sort = Sort.by("id");
        return cartDao.findAll(cartExample, sort);
    }

    public Cart addToCart(long productId, long count) throws Exception {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentUsername = authentication.getName();
        Users user = userService.getUserByUsername(currentUsername);
        Optional<Cart> loadedCart = this.getCartByUserId(user.getId());
        Cart cart = new Cart();
        if (loadedCart.isPresent()) {
            cart = loadedCart.get();
        } else {
            cart.setUser(user);
        }

        long totalItems = productItemService.countProductItemsAvialableByProductId(productId);
        if (totalItems < (cart.getProductItems() == null ? 0 : cart.getProductItems().size()) + count) {
            throw new Exception("Not enough items to fullfil request");
        }

        if (count < 0) {
            throw new Exception("Quantity is less than zero");
        }

        Product product = productService.getProductById(productId).get();
        List<ProductItem> productItems = product.getProductItems();
        productItems.stream().filter(item -> {
            return item.getProductStatus().getId() == 1 || item.getProductStatus().getId() == 2 ? true : false;
        });
        Collections.sort(productItems, Comparator.comparing(ProductItem::getSerialNumber, Comparator.nullsFirst(Comparator.naturalOrder())));
        Set<ProductItem> toCart = cart.getProductItems() != null ? cart.getProductItems() : new HashSet<>();
        for (int iter = 0; iter < count; iter++) {
            if (toCart.contains(productItems.get(iter))) {
                count = count + 1;
                continue;
            }
            productItems.get(iter).setProductStatus(new ProductStatus(2L));
            toCart.add(productItems.get(iter));
        }
        cart.setProductItems(toCart);
        return this.saveCart(cart);
    }

    public Cart subtractFromCart(long productId, long count) throws Exception {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentUsername = authentication.getName();
        Users user = userService.getUserByUsername(currentUsername);
        Optional<Cart> loadedCart = this.getCartByUserId(user.getId());
        Cart cart = new Cart();
        if (loadedCart.isPresent()) {
            cart = loadedCart.get();
        } else {
            cart.setUser(user);
        }

        if (count < 0) {
            throw new Exception("Quantity is less than zero");
        }

        List<ProductItem> itemsInCart = new ArrayList<>();
        itemsInCart.addAll(cart.getProductItems());
        Collections.sort(itemsInCart, Comparator.comparing(ProductItem::getSerialNumber, Comparator.nullsFirst(Comparator.naturalOrder())));
        Predicate<ProductItem> ofProduct = item -> item.getProduct().getId().equals(productId);
        Predicate<ProductItem> notOfProduct = item -> !item.getProduct().getId().equals(productId);
        List<ProductItem> itemsOfProduct = itemsInCart.stream().filter(ofProduct).collect(Collectors.toList());
        List<ProductItem> otherItems = itemsInCart.stream().filter(notOfProduct).collect(Collectors.toList());
        int endIndex = itemsOfProduct.size() - (int) count;
        itemsOfProduct = itemsOfProduct.subList(0, endIndex > 0 ? endIndex : 0);
        Set<ProductItem> newItemsSet = new HashSet<>();
        newItemsSet.addAll(otherItems);
        newItemsSet.addAll(itemsOfProduct);
        cart.setProductItems(newItemsSet);
        return this.saveCart(cart);
    }
}
