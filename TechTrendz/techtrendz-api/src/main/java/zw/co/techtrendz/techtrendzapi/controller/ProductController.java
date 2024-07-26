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
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import zw.co.techtrendz.techtrendzapi.entity.PagedProductsRequestDto;
import zw.co.techtrendz.techtrendzapi.entity.Product;
import zw.co.techtrendz.techtrendzapi.service.ProductService;
import zw.co.techtrendz.techtrendzapi.views.View;

/**
 *
 * @author smadzudzo
 */
@RestController
@JsonView({View.ProductView.class})
public class ProductController {

    @Autowired
    private ProductService productService;

    @RequestMapping(name = "/saveproduct", value = "/saveproduct", method = RequestMethod.POST)
    public Product saveProduct(@Valid @RequestBody Product product) {
        return productService.saveProduct(product);
    }

    @JsonView({View.ProductView.class})
    @RequestMapping(name = "/getproductbyid", value = "/getproductbyid", method = RequestMethod.GET)
    public Optional<Product> getProductById(@RequestParam(required = true) Long id) {
        return productService.getProductById(id);
    }

    @JsonView({View.ProductView.class})
    @RequestMapping(name = "/getproductall", value = "/getproductall", method = RequestMethod.GET)
    public List<Product> getProductAll() {
        return productService.getProductAll();
    }

    @RequestMapping(name = "/getproductallpaged", value = "/getproductallpaged", method = RequestMethod.POST)
    public Page<Product> getProductAllPaged(@RequestBody PagedProductsRequestDto pagedProductsRequestDto) {
        return productService.getProductAllPaged(pagedProductsRequestDto);
    }

}
