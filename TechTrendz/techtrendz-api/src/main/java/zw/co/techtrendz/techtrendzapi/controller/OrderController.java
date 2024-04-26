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
import zw.co.techtrendz.techtrendzapi.entity.Order;
import zw.co.techtrendz.techtrendzapi.service.OrderService;

/**
 *
 * @author smadzudzo
 */
@RestController
public class OrderController {

    @Autowired
    private OrderService orderService;

    @RequestMapping(name = "/saveorder", value = "/saveorder", method = RequestMethod.POST)
    public Order saveOrder(@Valid @RequestBody Order order) {
        return orderService.saveOrder(order);
    }

    @RequestMapping(name = "/getorderbyid", value = "/getorderbyid", method = RequestMethod.GET)
    public Optional<Order> getOrderById(@Valid @RequestBody Order order) {
        return orderService.getOrderById(order.getId());
    }

    @RequestMapping(name = "/getorderall", value = "/getorderall", method = RequestMethod.GET)
    public List<Order> getOrderAll() {
        return orderService.getOrderAll();
    }

}
