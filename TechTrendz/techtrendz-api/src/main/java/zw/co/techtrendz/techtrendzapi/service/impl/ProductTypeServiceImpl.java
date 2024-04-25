/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service.impl;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import zw.co.techtrendz.techtrendzapi.entity.ProductType;
import zw.co.techtrendz.techtrendzapi.repository.ProductTypeDao;
import zw.co.techtrendz.techtrendzapi.service.ProductTypeService;

/**
 *
 * @author smadzudzo
 */
@Service
public class ProductTypeServiceImpl implements ProductTypeService {

    @Autowired
    private ProductTypeDao addressDao;

    public ProductType saveProductType(ProductType address) {
        return addressDao.save(address);
    }

    public Optional<ProductType> getProductTypeById(long id) {
        return addressDao.findById(id);
    }

    public List<ProductType> getProductTypeAll() {
        return addressDao.findAll();
    }

}
