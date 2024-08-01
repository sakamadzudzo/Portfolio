/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.controller;

import com.fasterxml.jackson.annotation.JsonView;
import jakarta.validation.Valid;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import zw.co.techtrendz.techtrendzapi.entity.ProductStatus;
import zw.co.techtrendz.techtrendzapi.service.ProductStatusService;
import zw.co.techtrendz.techtrendzapi.views.View;

/**
 *
 * @author smadzudzo
 */
@RestController
public class ProductStatusController {

    @Autowired
    private ProductStatusService productStatusService;

    @RequestMapping(name = "/saveproductstatus", value = "/saveproductstatus", method = RequestMethod.POST)
    public ProductStatus saveProductStatus(@Valid @RequestBody ProductStatus productStatus) {
        return productStatusService.saveProductStatus(productStatus);
    }

    @RequestMapping(name = "/getproductstatusbyid", value = "/getproductstatusbyid", method = RequestMethod.GET)
    public Optional<ProductStatus> getProductStatusById(@RequestParam(required = true) Long id) {
        return productStatusService.getProductStatusById(id);
    }

    @RequestMapping(name = "/getproductstatusall", value = "/getproductstatusall", method = RequestMethod.GET)
    public List<ProductStatus> getProductStatusAll() {
        return productStatusService.getProductStatusAll();
    }

}
