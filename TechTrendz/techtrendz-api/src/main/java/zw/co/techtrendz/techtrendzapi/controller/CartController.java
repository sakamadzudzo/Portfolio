/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.controller;

import jakarta.validation.Valid;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import zw.co.techtrendz.techtrendzapi.entity.Cart;
import zw.co.techtrendz.techtrendzapi.service.CartService;

/**
 *
 * @author smadzudzo
 */
@RestController
public class CartController {

    @Autowired
    private CartService cartService;

    @RequestMapping(name = "/savecart", value = "/savecart", method = RequestMethod.POST)
    public Cart saveCart(@Valid @RequestBody Cart cart) {
        return cartService.saveCart(cart);
    }

    @RequestMapping(name = "/getcartbyid", value = "/getcartbyid", method = RequestMethod.GET)
    public Optional<Cart> getCartById(@RequestParam(required = true) Long id) {
        return cartService.getCartById(id);
    }

    @RequestMapping(name = "/getcartall", value = "/getcartall", method = RequestMethod.GET)
    public List<Cart> getCartAll() {
        return cartService.getCartAll();
    }

    @RequestMapping(name = "/getcartbyuserid", value = "/getcartbyuserid", method = RequestMethod.GET)
    public Optional<Cart> getCartByUserId(@RequestParam(required = true) Long userId) {
        return cartService.getCartByUserId(userId);
    }

}
