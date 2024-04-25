/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service.impl;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
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
    private ProductDao addressDao;

    public Product saveProduct(Product address) {
        return addressDao.save(address);
    }

    public Optional<Product> getProductById(long id) {
        return addressDao.findById(id);
    }

    public List<Product> getProductAll() {
        return addressDao.findAll();
    }

}
