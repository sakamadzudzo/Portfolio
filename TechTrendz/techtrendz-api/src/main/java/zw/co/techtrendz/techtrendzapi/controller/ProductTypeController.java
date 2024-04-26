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
import zw.co.techtrendz.techtrendzapi.entity.ProductType;
import zw.co.techtrendz.techtrendzapi.service.ProductTypeService;

/**
 *
 * @author smadzudzo
 */
@RestController
public class ProductTypeController {

    @Autowired
    private ProductTypeService productTypeService;

    @RequestMapping(name = "/saveproducttype", value = "/saveproducttype", method = RequestMethod.POST)
    public ProductType saveProductType(@Valid @RequestBody ProductType productType) {
        return productTypeService.saveProductType(productType);
    }

    @RequestMapping(name = "/getproducttypebyid", value = "/getproducttypebyid", method = RequestMethod.GET)
    public Optional<ProductType> getProductTypeById(@Valid @RequestBody ProductType productType) {
        return productTypeService.getProductTypeById(productType.getId());
    }

    @RequestMapping(name = "/getproducttypeall", value = "/getproducttypeall", method = RequestMethod.GET)
    public List<ProductType> getProductTypeAll() {
        return productTypeService.getProductTypeAll();
    }

}
