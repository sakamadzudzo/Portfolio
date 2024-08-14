/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service.impl;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import zw.co.techtrendz.techtrendzapi.entity.Checkout;
import zw.co.techtrendz.techtrendzapi.service.CheckoutService;
import zw.co.techtrendz.techtrendzapi.repository.CheckoutDao;

/**
 *
 * @author smadzudzo
 */
@Service
public class CheckoutServiceImpl implements CheckoutService {

    @Autowired
    private CheckoutDao addressDao;

    public Checkout saveCheckout(Checkout address) {
        return addressDao.save(address);
    }

    public Optional<Checkout> getCheckoutById(long id) {
        return addressDao.findById(id);
    }

    public List<Checkout> getCheckoutAll() {
        return addressDao.findAll();
    }

}
