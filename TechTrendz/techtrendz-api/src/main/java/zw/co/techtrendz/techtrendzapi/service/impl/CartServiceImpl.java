/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service.impl;

import java.util.ArrayList;
import zw.co.techtrendz.techtrendzapi.service.ProductItemService;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import zw.co.techtrendz.techtrendzapi.entity.Cart;
import zw.co.techtrendz.techtrendzapi.entity.Product;
import zw.co.techtrendz.techtrendzapi.entity.ProductItem;
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

    public Cart addToCart(long productId, long count) {
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

        Product product = productService.getProductById(productId).get();
        List<ProductItem> productItems = product.getProductItems();
        productItems.stream().filter(item -> {
            return item.getProductStatus().getId() == 1 || item.getProductStatus().getId() == 2 ? true : false;
        });
        Set<ProductItem> toCart = cart.getProductItems();
        for (int iter = 0; iter < count; iter++) {
            toCart.add(productItems.get(iter));
        }
        cart.setProductItems(toCart);
        return this.saveCart(cart);
    }

}
