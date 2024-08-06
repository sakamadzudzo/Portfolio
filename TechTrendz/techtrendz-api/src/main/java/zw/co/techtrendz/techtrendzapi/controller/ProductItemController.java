/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import zw.co.techtrendz.techtrendzapi.service.ProductItemService;

/**
 *
 * @author smadzudzo
 */
@RestController
public class ProductItemController {

    @Autowired
    private ProductItemService productItemService;

    @RequestMapping(name = "/countProductItemsAvialableByProductId", value = "/countProductItemsAvialableByProductId", method = RequestMethod.GET)
    public long countProductItemsAvialableByProductId(@RequestParam long productId) {
        return productItemService.countProductItemsAvialableByProductId(productId);
    }
}
