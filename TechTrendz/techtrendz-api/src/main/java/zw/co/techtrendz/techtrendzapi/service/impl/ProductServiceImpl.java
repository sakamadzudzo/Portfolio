/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service.impl;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import zw.co.techtrendz.techtrendzapi.entity.Featured;
import zw.co.techtrendz.techtrendzapi.entity.HotDeal;
import zw.co.techtrendz.techtrendzapi.entity.PagedProductsRequestDto;
import zw.co.techtrendz.techtrendzapi.entity.Product;
import zw.co.techtrendz.techtrendzapi.entity.Promotion;
import zw.co.techtrendz.techtrendzapi.repository.FeaturedDao;
import zw.co.techtrendz.techtrendzapi.repository.HotDealDao;
import zw.co.techtrendz.techtrendzapi.repository.ProductDao;
import zw.co.techtrendz.techtrendzapi.repository.PromotionDao;
import zw.co.techtrendz.techtrendzapi.service.ProductService;

/**
 *
 * @author smadzudzo
 */
@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductDao productDao;
    @Autowired
    private HotDealDao hotDealDao;
    @Autowired
    private FeaturedDao featuredDao;
    @Autowired
    private PromotionDao promotionDao;

    public Product saveProduct(Product product) {
        Product newProduct = productDao.save(product);
        newProduct.setProductItems(null);
        return newProduct;
    }

    public List<Product> saveProducts(List<Product> products) {
        List<Product> savedProducts = new ArrayList<>();
        products.forEach(product -> {
            Product savedProduct = this.saveProduct(product);
            savedProducts.add(savedProduct);
        });
        return savedProducts;
    }

    public Optional<Product> getProductById(long id) {
        return productDao.findById(id);
    }

    public List<Product> getProductAll() {
        return productDao.findAll();
    }

    public Page<Product> getProductAllPaged(PagedProductsRequestDto pagedProductsRequestDto) {
        List<String> sortFields = pagedProductsRequestDto.getSortFields();
        if (sortFields.isEmpty()) {
            sortFields.add("name");
        }
        String[] sortFieldsArray = sortFields.toArray(new String[sortFields.size()]);
        Pageable sortedPage = PageRequest.of(pagedProductsRequestDto.getPageNumber(), pagedProductsRequestDto.getPageSize(), Sort.by(pagedProductsRequestDto.getSortDirection(), sortFieldsArray));
        if (pagedProductsRequestDto.getExampleProduct() != null) {
            Example<Product> exampleProduct = Example.of(pagedProductsRequestDto.getExampleProduct());
            return productDao.findAll(exampleProduct, sortedPage);
        } else {
            return productDao.findAll(sortedPage);
        }
    }

    public HotDeal saveHotDeal(long productId) {
        HotDeal HDExample = new HotDeal();
        HDExample.setProduct(new Product(productId));
        Example example = Example.of(HDExample);
        Optional<HotDeal> findSaved = hotDealDao.findOne(example);
        HotDeal hotDeal = new HotDeal();
        if (findSaved.isPresent()) {
            hotDeal = findSaved.get();
            hotDeal.setActive(Boolean.TRUE);
        } else {
            hotDeal.setActive(Boolean.TRUE);
            hotDeal.setProduct(new Product(productId));
        }

        return hotDealDao.save(hotDeal);
    }

    public HotDeal saveHotDeal(HotDeal hotDeal) {
        return hotDealDao.save(hotDeal);
    }

    public List<HotDeal> saveHotDeals(Long[] productIds) {
        List<HotDeal> savedHotDeals = new ArrayList<>();
        Arrays.asList(productIds).forEach(id -> {
            HotDeal saveHotDeal = this.saveHotDeal(id);
            savedHotDeals.add(saveHotDeal);
        });
        return savedHotDeals;
    }

    public List<HotDeal> saveHotDeals(List<HotDeal> hotDeals) {
        List<HotDeal> savedHotDeals = new ArrayList<>();
        hotDeals.forEach(hotDeal -> {
            HotDeal saveHotDeal = this.saveHotDeal(hotDeal);
            savedHotDeals.add(saveHotDeal);
        });
        return savedHotDeals;
    }

    public Featured saveFeatured(long productId) {
        Featured FExample = new Featured();
        FExample.setProduct(new Product(productId));
        Example example = Example.of(FExample);
        Optional<Featured> findSaved = featuredDao.findOne(example);
        Featured featured = new Featured();
        if (findSaved.isPresent()) {
            featured = findSaved.get();
            featured.setActive(Boolean.TRUE);
        } else {
            featured.setActive(Boolean.TRUE);
            featured.setProduct(new Product(productId));
        }

        return featuredDao.save(featured);
    }

    public Featured saveFeatured(Featured featured) {
        return featuredDao.save(featured);
    }

    public List<Featured> saveFeatureds(Long[] productIds) {
        List<Featured> savedFeatureds = new ArrayList<>();
        Arrays.asList(productIds).forEach(id -> {
            Featured saveFeatured = this.saveFeatured(id);
            savedFeatureds.add(saveFeatured);
        });
        return savedFeatureds;
    }

    public List<Featured> saveFeatureds(List<Featured> featureds) {
        List<Featured> savedFeatureds = new ArrayList<>();
        featureds.forEach(id -> {
            Featured saveFeatured = this.saveFeatured(id);
            savedFeatureds.add(saveFeatured);
        });
        return savedFeatureds;
    }

    public Promotion savePromotion(Promotion promotion) {
        return promotionDao.save(promotion);
    }

    public List<Promotion> savePromotions(List<Promotion> promotions) {
        List<Promotion> savedPromotions = new ArrayList<>();
        promotions.forEach(id -> {
            Promotion savePromotion = this.savePromotion(id);
            savedPromotions.add(savePromotion);
        });
        return savedPromotions;
    }

}
