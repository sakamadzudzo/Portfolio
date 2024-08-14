/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service;

import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;
import zw.co.techtrendz.techtrendzapi.entity.Checkout;

/**
 *
 * @author smadzudzo
 */
@Service
public interface CheckoutService {

    public Checkout saveCheckout(Checkout checkout);

    public Optional<Checkout> getCheckoutById(long id);

    public List<Checkout> getCheckoutAll();
}
