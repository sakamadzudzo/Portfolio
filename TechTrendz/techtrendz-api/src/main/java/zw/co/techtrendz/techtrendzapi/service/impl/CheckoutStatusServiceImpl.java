/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service.impl;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import zw.co.techtrendz.techtrendzapi.entity.CheckoutStatus;
import zw.co.techtrendz.techtrendzapi.service.CheckoutStatusService;
import zw.co.techtrendz.techtrendzapi.repository.CheckoutStatusDao;

/**
 *
 * @author smadzudzo
 */
@Service
public class CheckoutStatusServiceImpl implements CheckoutStatusService {

    @Autowired
    private CheckoutStatusDao addressDao;

    public CheckoutStatus saveCheckoutStatus(CheckoutStatus address) {
        return addressDao.save(address);
    }

    public Optional<CheckoutStatus> getCheckoutStatusById(long id) {
        return addressDao.findById(id);
    }

    public List<CheckoutStatus> getCheckoutStatusAll() {
        return addressDao.findAll();
    }

}
