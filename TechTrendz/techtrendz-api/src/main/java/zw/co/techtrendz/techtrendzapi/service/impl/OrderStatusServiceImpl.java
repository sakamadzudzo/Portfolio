/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service.impl;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import zw.co.techtrendz.techtrendzapi.entity.OrderStatus;
import zw.co.techtrendz.techtrendzapi.repository.OrderStatusDao;
import zw.co.techtrendz.techtrendzapi.service.OrderStatusService;

/**
 *
 * @author smadzudzo
 */
@Service
public class OrderStatusServiceImpl implements OrderStatusService {

    @Autowired
    private OrderStatusDao addressDao;

    public OrderStatus saveOrderStatus(OrderStatus address) {
        return addressDao.save(address);
    }

    public Optional<OrderStatus> getOrderStatusById(long id) {
        return addressDao.findById(id);
    }

    public List<OrderStatus> getOrderStatusAll() {
        return addressDao.findAll();
    }

}
