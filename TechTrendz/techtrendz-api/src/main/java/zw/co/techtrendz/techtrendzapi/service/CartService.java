/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service;

import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;
import zw.co.techtrendz.techtrendzapi.entity.Cart;

/**
 *
 * @author smadzudzo
 */
@Service
public interface CartService {

    public Cart saveCart(Cart cart);

    public Optional<Cart> getCartById(long id);

    public List<Cart> getCartAll();

    public Optional<Cart> getCartByUserId(long userId);

    public Cart addToCart(long productId, long count);

    public Cart subtractFromCart(long productId, long count);

    public List<Cart> cartsWithProductItem(long productItemId);
}
