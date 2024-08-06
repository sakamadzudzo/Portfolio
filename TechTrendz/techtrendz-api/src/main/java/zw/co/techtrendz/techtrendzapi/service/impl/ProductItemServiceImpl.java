/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service.impl;

import zw.co.techtrendz.techtrendzapi.service.ProductItemService;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;
import zw.co.techtrendz.techtrendzapi.entity.Product;
import zw.co.techtrendz.techtrendzapi.entity.ProductItem;
import zw.co.techtrendz.techtrendzapi.repository.ProductItemDao;

/**
 *
 * @author smadzudzo
 */
@Service
public class ProductItemServiceImpl implements ProductItemService {

    @Autowired
    private ProductItemDao productItemDao;

    public ProductItem saveProductItem(ProductItem productItem) {
        return productItemDao.save(productItem);
    }

    public List<ProductItem> saveProductItems(List<ProductItem> productItems) {
        List<ProductItem> savedProductItems = new ArrayList<>();
        productItems.forEach(productItem -> {
            ProductItem savedProductItem = this.saveProductItem(productItem);
            savedProductItems.add(productItem);
        });
        return productItems;
    }

    public Optional<ProductItem> getProductItemById(long id) {
        return productItemDao.findById(id);
    }

    public List<ProductItem> getProductItemAll() {
        return productItemDao.findAll();
    }

    public long countProductItemsAvialableByProductId(long productId) {
        Product product = new Product(productId);
        ProductItem productItem = new ProductItem();
        Example<ProductItem> productItemExample = Example.of(productItem);
        return productItemDao.count(productItemExample);
    }
}
