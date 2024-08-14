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
import zw.co.techtrendz.techtrendzapi.entity.Checkout;
import zw.co.techtrendz.techtrendzapi.service.CheckoutService;

/**
 *
 * @author smadzudzo
 */
@RestController
public class CheckoutController {

    @Autowired
    private CheckoutService checkoutService;

    @RequestMapping(name = "/savecheckout", value = "/savecheckout", method = RequestMethod.POST)
    public Checkout saveCheckout(@Valid @RequestBody Checkout checkout) {
        return checkoutService.saveCheckout(checkout);
    }

    @RequestMapping(name = "/getcheckoutbyid", value = "/getcheckoutbyid", method = RequestMethod.GET)
    public Optional<Checkout> getCheckoutById(@RequestParam(required = true) Long id) {
        return checkoutService.getCheckoutById(id);
    }

    @RequestMapping(name = "/getcheckoutall", value = "/getcheckoutall", method = RequestMethod.GET)
    public List<Checkout> getCheckoutAll() {
        return checkoutService.getCheckoutAll();
    }

}
