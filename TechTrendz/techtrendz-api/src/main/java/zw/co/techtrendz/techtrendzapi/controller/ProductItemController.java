/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.controller;

import com.fasterxml.jackson.annotation.JsonView;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import zw.co.techtrendz.techtrendzapi.entity.ProductItem;
import zw.co.techtrendz.techtrendzapi.service.ProductItemService;
import zw.co.techtrendz.techtrendzapi.views.View;

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

    @JsonView({View.ProductItemView.class})
    @RequestMapping(name = "/getProductItemAllByProductId", value = "/getProductItemAllByProductId", method = RequestMethod.GET)
    public List<ProductItem> getProductItemAllByProductId(@RequestParam long productId) {
        return productItemService.getProductItemAllByProductId(productId);
    }

    @RequestMapping(name = "/saveproductitems", value = "/saveproductitems", method = RequestMethod.POST)
    public long saveProductItems(@RequestBody List<ProductItem> productItems, @RequestParam long productId) {
        productItemService.saveProductItems(productItems);
        return productId;
    }
}
