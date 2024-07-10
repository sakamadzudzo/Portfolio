/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service.impl;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import zw.co.techtrendz.techtrendzapi.entity.ProductStatus;
import zw.co.techtrendz.techtrendzapi.repository.ProductStatusDao;
import zw.co.techtrendz.techtrendzapi.service.ProductStatusService;

/**
 *
 * @author smadzudzo
 */
@Service
public class ProductStatusServiceImpl implements ProductStatusService {

    @Autowired
    private ProductStatusDao productStatusDao;

    public ProductStatus saveProductStatus(ProductStatus address) {
        return productStatusDao.save(address);
    }

    public Optional<ProductStatus> getProductStatusById(long id) {
        return productStatusDao.findById(id);
    }

    public List<ProductStatus> getProductStatusAll() {
        return productStatusDao.findAll();
    }

}
