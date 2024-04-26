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
import org.springframework.web.bind.annotation.RestController;
import zw.co.techtrendz.techtrendzapi.entity.Address;
import zw.co.techtrendz.techtrendzapi.service.AddressService;

/**
 *
 * @author smadzudzo
 */
@RestController
public class AddressController {

    @Autowired
    private AddressService addressService;

    @RequestMapping(name = "/saveaddress", value = "/saveaddress", method = RequestMethod.POST)
    public Address saveAddress(@Valid @RequestBody Address address) {
        return addressService.saveAddress(address);
    }

    @RequestMapping(name = "/getaddressbyid", value = "/getaddressbyid", method = RequestMethod.GET)
    public Optional<Address> getAddressById(@Valid @RequestBody Address address) {
        return addressService.getAddressById(address.getId());
    }

    @RequestMapping(name = "/getaddressall", value = "/getaddressall", method = RequestMethod.GET)
    public List<Address> getAddressAll() {
        return addressService.getAddressAll();
    }

}
