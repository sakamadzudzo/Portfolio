/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service;

import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;
import zw.co.techtrendz.techtrendzapi.entity.OrderStatus;

/**
 *
 * @author smadzudzo
 */
@Service
public interface OrderStatusService {

    public OrderStatus saveOrderStatus(OrderStatus orderStatus);

    public Optional<OrderStatus> getOrderStatusById(long id);

    public List<OrderStatus> getOrderStatusAll();
}
