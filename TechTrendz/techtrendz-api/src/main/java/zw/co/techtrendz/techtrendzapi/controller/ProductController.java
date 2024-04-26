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
import zw.co.techtrendz.techtrendzapi.entity.Product;
import zw.co.techtrendz.techtrendzapi.service.ProductService;

/**
 *
 * @author smadzudzo
 */
@RestController
public class ProductController {

    @Autowired
    private ProductService productService;

    @RequestMapping(name = "/saveproduct", value = "/saveproduct", method = RequestMethod.POST)
    public Product saveProduct(@Valid @RequestBody Product product) {
        return productService.saveProduct(product);
    }

    @RequestMapping(name = "/getproductbyid", value = "/getproductbyid", method = RequestMethod.GET)
    public Optional<Product> getProductById(@Valid @RequestBody Product product) {
        return productService.getProductById(product.getId());
    }

    @RequestMapping(name = "/getproductall", value = "/getproductall", method = RequestMethod.GET)
    public List<Product> getProductAll() {
        return productService.getProductAll();
    }

}
