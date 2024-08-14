/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service;

import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;
import zw.co.techtrendz.techtrendzapi.entity.CheckoutStatus;

/**
 *
 * @author smadzudzo
 */
@Service
public interface CheckoutStatusService {

    public CheckoutStatus saveCheckoutStatus(CheckoutStatus checkoutStatus);

    public Optional<CheckoutStatus> getCheckoutStatusById(long id);

    public List<CheckoutStatus> getCheckoutStatusAll();
}
