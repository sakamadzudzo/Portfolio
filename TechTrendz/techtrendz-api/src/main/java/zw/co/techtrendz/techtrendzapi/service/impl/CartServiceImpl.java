/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service.impl;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import zw.co.techtrendz.techtrendzapi.entity.Cart;
import zw.co.techtrendz.techtrendzapi.repository.CartDao;
import zw.co.techtrendz.techtrendzapi.service.CartService;

/**
 *
 * @author smadzudzo
 */
@Service
public class CartServiceImpl implements CartService {

    @Autowired
    private CartDao addressDao;

    public Cart saveCart(Cart address) {
        return addressDao.save(address);
    }

    public Optional<Cart> getCartById(long id) {
        return addressDao.findById(id);
    }

    public List<Cart> getCartAll() {
        return addressDao.findAll();
    }

}
