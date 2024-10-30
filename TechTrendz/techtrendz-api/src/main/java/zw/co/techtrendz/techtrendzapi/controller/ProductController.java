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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import zw.co.techtrendz.techtrendzapi.entity.Featured;
import zw.co.techtrendz.techtrendzapi.entity.HotDeal;
import zw.co.techtrendz.techtrendzapi.entity.PagedProductsRequestDto;
import zw.co.techtrendz.techtrendzapi.entity.Product;
import zw.co.techtrendz.techtrendzapi.entity.Promotion;
import zw.co.techtrendz.techtrendzapi.service.ProductService;
import zw.co.techtrendz.techtrendzapi.views.View;

/**
 *
 * @author smadzudzo
 */
@RestController
public class ProductController {

    @Autowired
    private ProductService productService;

    @RequestMapping(name = "/saveproduct", value = "/saveproduct", method = RequestMethod.POST)
    public Product saveProduct(
            @Valid @RequestBody Product product
    ) {
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

    @JsonView({View.ProductView.class})
    @RequestMapping(name = "/getproductallpaged", value = "/getproductallpaged", method = RequestMethod.POST)
    public Page<Product> getProductAllPaged(@RequestBody PagedProductsRequestDto pagedProductsRequestDto) {
        return productService.getProductAllPaged(pagedProductsRequestDto);
    }

    @RequestMapping(name = "/savehotdealbyproductid", value = "/savehotdealbyproductid", method = RequestMethod.POST)
    public HotDeal saveHotDeal(@RequestParam long productId) {
        return productService.saveHotDeal(productId);
    }

    @RequestMapping(name = "/savehotdeal", value = "/savehotdeal", method = RequestMethod.POST)
    public HotDeal saveHotDeal(@RequestBody HotDeal hotDeal) {
        return productService.saveHotDeal(hotDeal);
    }

    @RequestMapping(name = "/savehotdealsbyproductids", value = "/savehotdealsbyproductids", method = RequestMethod.POST)
    public List<HotDeal> saveHotDeals(@RequestParam Long[] productIds) {
        return productService.saveHotDeals(productIds);
    }

    @RequestMapping(name = "/savehotdeals", value = "/savehotdeals", method = RequestMethod.POST)
    public List<HotDeal> saveHotDeals(@RequestBody List<HotDeal> hotDeals) {
        return productService.saveHotDeals(hotDeals);
    }

    @RequestMapping(name = "/gethotdeals", value = "/gethotdeals", method = RequestMethod.GET)
    public List<HotDeal> getHotDeals(HotDeal hotDeal) {
        return productService.getHotDeals(hotDeal);
    }

    @RequestMapping(name = "/savefeaturedbyproductid", value = "/savefeaturedbyproductid", method = RequestMethod.POST)
    public Featured saveFeatured(@RequestParam long productId) {
        return productService.saveFeatured(productId);
    }

    @RequestMapping(name = "/savefeatured", value = "/savefeatured", method = RequestMethod.POST)
    public Featured saveFeatured(@RequestBody Featured featured) {
        return productService.saveFeatured(featured);
    }

    @RequestMapping(name = "/savefeaturedsbyproductids", value = "/savefeaturedsbyproductids", method = RequestMethod.POST)
    public List<Featured> saveFeatureds(@RequestParam Long[] productIds) {
        return productService.saveFeatureds(productIds);
    }

    @RequestMapping(name = "/savefeatureds", value = "/savefeatureds", method = RequestMethod.POST)
    public List<Featured> saveFeatureds(@RequestBody List<Featured> featureds) {
        return productService.saveFeatureds(featureds);
    }

    @RequestMapping(name = "/getfeatureds", value = "/getfeatureds", method = RequestMethod.GET)
    public List<Featured> getFeatureds(Featured featured) {
        return productService.getFeatureds(featured);
    }

    @RequestMapping(name = "/savepromotion", value = "/savepromotion", method = RequestMethod.POST)
    public Promotion savePromotion(@RequestBody Promotion promotion) {
        return productService.savePromotion(promotion);
    }

    @RequestMapping(name = "/savepromotions", value = "/savepromotions", method = RequestMethod.POST)
    public List<Promotion> savePromotions(@RequestBody List<Promotion> promotions) {
        return productService.savePromotions(promotions);
    }

    @JsonView({View.ProductView.class})
    @RequestMapping(name = "/getpromotions", value = "/getpromotions", method = RequestMethod.GET)
    public List<Promotion> getPromotions(Promotion promotion) {
        return productService.getPromotions(promotion);
    }
}
