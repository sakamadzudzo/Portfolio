/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service;

import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import zw.co.techtrendz.techtrendzapi.entity.Featured;
import zw.co.techtrendz.techtrendzapi.entity.HotDeal;
import zw.co.techtrendz.techtrendzapi.entity.PagedProductsRequestDto;
import zw.co.techtrendz.techtrendzapi.entity.Product;
import zw.co.techtrendz.techtrendzapi.entity.Promotion;

/**
 *
 * @author smadzudzo
 */
@Service
public interface ProductService {

    public Product saveProduct(Product product);

    public List<Product> saveProducts(List<Product> products);

    public Optional<Product> getProductById(long id);

    public List<Product> getProductAll();

    public Page<Product> getProductAllPaged(PagedProductsRequestDto pagedProductsRequestDto);

    public HotDeal saveHotDeal(long productId);

    public HotDeal saveHotDeal(HotDeal hotDeal);

    public List<HotDeal> saveHotDeals(Long[] productIds);

    public List<HotDeal> saveHotDeals(List<HotDeal> hotDeals);
    
    public List<HotDeal> getHotDeals(HotDeal hotDeal);

    public Featured saveFeatured(long productId);

    public Featured saveFeatured(Featured featured);

    public List<Featured> saveFeatureds(Long[] productIds);

    public List<Featured> saveFeatureds(List<Featured> featureds);
    
    public List<Featured> getFeatureds(Featured featured);

    public Promotion savePromotion(Promotion promotion);

    public List<Promotion> savePromotions(List<Promotion> promotions);
    
    public List<Promotion> getPromotions(Promotion promotion);
}
