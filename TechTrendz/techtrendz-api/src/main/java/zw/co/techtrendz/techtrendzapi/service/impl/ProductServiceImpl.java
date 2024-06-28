/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service.impl;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
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

    public Product saveProduct(Product address) {
        return productDao.save(address);
    }

    public Optional<Product> getProductById(long id) {
        return productDao.findById(id);
    }

    public List<Product> getProductAll() {
        return productDao.findAll();
    }

    public Page<Product> getProductAllPaged(int pageNumber, int pageSize, String[] sortFields, Sort.Direction sortDirection) {
        Pageable sortedPage = PageRequest.of(pageNumber, pageSize, Sort.by(sortDirection, sortFields));
        return productDao.findAll(sortedPage);
    }

}
