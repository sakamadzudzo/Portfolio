/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service.impl;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import zw.co.techtrendz.techtrendzapi.entity.Order;
import zw.co.techtrendz.techtrendzapi.repository.OrderDao;
import zw.co.techtrendz.techtrendzapi.service.OrderService;

/**
 *
 * @author smadzudzo
 */
@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderDao addressDao;

    public Order saveOrder(Order address) {
        return addressDao.save(address);
    }

    public Optional<Order> getOrderById(long id) {
        return addressDao.findById(id);
    }

    public List<Order> getOrderAll() {
        return addressDao.findAll();
    }

}
