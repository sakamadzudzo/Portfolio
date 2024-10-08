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
import zw.co.techtrendz.techtrendzapi.entity.CheckoutStatus;
import zw.co.techtrendz.techtrendzapi.service.CheckoutStatusService;

/**
 *
 * @author smadzudzo
 */
@RestController
public class CheckoutStatusController {

    @Autowired
    private CheckoutStatusService checkoutStatusService;

    @RequestMapping(name = "/savecheckoutstatus", value = "/savecheckoutstatus", method = RequestMethod.POST)
    public CheckoutStatus saveCheckoutStatus(@Valid @RequestBody CheckoutStatus checkoutStatus) {
        return checkoutStatusService.saveCheckoutStatus(checkoutStatus);
    }

    @RequestMapping(name = "/getcheckoutstatusbyid", value = "/getcheckoutstatusbyid", method = RequestMethod.GET)
    public Optional<CheckoutStatus> getCheckoutStatusById(@RequestParam(required = true) Long id) {
        return checkoutStatusService.getCheckoutStatusById(id);
    }

    @RequestMapping(name = "/getcheckoutstatusall", value = "/getcheckoutstatusall", method = RequestMethod.GET)
    public List<CheckoutStatus> getCheckoutStatusAll() {
        return checkoutStatusService.getCheckoutStatusAll();
    }

}
