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
import zw.co.techtrendz.techtrendzapi.entity.OrderStatus;
import zw.co.techtrendz.techtrendzapi.service.OrderStatusService;

/**
 *
 * @author smadzudzo
 */
@RestController
public class OrderStatusController {

    @Autowired
    private OrderStatusService orderStatusService;

    @RequestMapping(name = "/saveorderstatus", value = "/saveorderstatus", method = RequestMethod.POST)
    public OrderStatus saveOrderStatus(@Valid @RequestBody OrderStatus orderStatus) {
        return orderStatusService.saveOrderStatus(orderStatus);
    }

    @RequestMapping(name = "/getorderstatusbyid", value = "/getorderstatusbyid", method = RequestMethod.GET)
    public Optional<OrderStatus> getOrderStatusById(@RequestParam(required = true) Long id) {
        return orderStatusService.getOrderStatusById(id);
    }

    @RequestMapping(name = "/getorderstatusall", value = "/getorderstatusall", method = RequestMethod.GET)
    public List<OrderStatus> getOrderStatusAll() {
        return orderStatusService.getOrderStatusAll();
    }

}
