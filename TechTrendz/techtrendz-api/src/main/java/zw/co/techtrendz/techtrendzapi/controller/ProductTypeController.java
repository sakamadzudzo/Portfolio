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
import zw.co.techtrendz.techtrendzapi.entity.ProductType;
import zw.co.techtrendz.techtrendzapi.service.ProductTypeService;
import zw.co.techtrendz.techtrendzapi.views.View;

/**
 *
 * @author smadzudzo
 */
@RestController
public class ProductTypeController {

    @Autowired
    private ProductTypeService productTypeService;

    @JsonView({View.CartView.class, View.ProductItemView.class, View.ProductView.class})
    @RequestMapping(name = "/saveproducttype", value = "/saveproducttype", method = RequestMethod.POST)
    public ProductType saveProductType(@Valid @RequestBody ProductType productType) {
        return productTypeService.saveProductType(productType);
    }

    @JsonView({View.CartView.class, View.ProductItemView.class, View.ProductView.class})
    @RequestMapping(name = "/getproducttypebyid", value = "/getproducttypebyid", method = RequestMethod.GET)
    public Optional<ProductType> getProductTypeById(@RequestParam(required = true) Long id) {
        return productTypeService.getProductTypeById(id);
    }

    @JsonView({View.CartView.class, View.ProductItemView.class, View.ProductView.class})
    @RequestMapping(name = "/getproducttypeall", value = "/getproducttypeall", method = RequestMethod.GET)
    public List<ProductType> getProductTypeAll() {
        return productTypeService.getProductTypeAll();
    }

}
