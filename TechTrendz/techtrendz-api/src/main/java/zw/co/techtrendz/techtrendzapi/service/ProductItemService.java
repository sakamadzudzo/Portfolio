/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service;

import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;
import zw.co.techtrendz.techtrendzapi.entity.ProductItem;

/**
 *
 * @author smadzudzo
 */
@Service
public interface ProductItemService {

    public ProductItem saveProductItem(ProductItem productItem);

    public List<ProductItem> saveProductItems(List<ProductItem> productItems);

    public Optional<ProductItem> getProductItemById(long id);

    public List<ProductItem> getProductItemAll();

    public long countProductItemsAvialableByProductId(long productId);
}
