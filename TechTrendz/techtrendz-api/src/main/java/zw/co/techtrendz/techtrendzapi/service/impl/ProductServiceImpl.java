/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import zw.co.techtrendz.techtrendzapi.entity.PagedProductsRequestDto;
import zw.co.techtrendz.techtrendzapi.entity.Product;
import zw.co.techtrendz.techtrendzapi.repository.ProductDao;
import zw.co.techtrendz.techtrendzapi.service.ProductService;

/**
 *
 * @author smadzudzo
 */
@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductDao productDao;

    public Product saveProduct(Product product) {
        System.out.println("\n\n\nProduct media file:\t" + product.getPictures() + "\n\n\n");
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

}
