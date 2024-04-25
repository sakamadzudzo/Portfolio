/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service.impl;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import zw.co.techtrendz.techtrendzapi.entity.Address;
import zw.co.techtrendz.techtrendzapi.repository.AddressDao;
import zw.co.techtrendz.techtrendzapi.service.AddressService;

/**
 *
 * @author smadzudzo
 */
@Service
public class AddressServiceImpl implements AddressService {

    @Autowired
    private AddressDao addressDao;

    public Address saveAddress(Address address) {
        return addressDao.save(address);
    }

    public Optional<Address> getAddressById(long id) {
        return addressDao.findById(id);
    }

    public List<Address> getAddressAll() {
        return addressDao.findAll();
    }

}
