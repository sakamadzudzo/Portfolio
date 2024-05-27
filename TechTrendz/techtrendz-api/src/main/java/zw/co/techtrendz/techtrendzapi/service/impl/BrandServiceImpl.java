/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import zw.co.techtrendz.techtrendzapi.entity.Brand;
import zw.co.techtrendz.techtrendzapi.repository.BrandDao;
import zw.co.techtrendz.techtrendzapi.service.BrandService;

/**
 *
 * @author smadzudzo
 */
@Service
public class BrandServiceImpl implements BrandService {

    @Autowired
    private BrandDao addressDao;

    public Brand saveBrand(Brand address) {
        return addressDao.save(address);
    }

    public List<Brand> saveBrands(List<Brand> brands) {
        List<Brand> savedBrands = new ArrayList<>();
        for (Brand brand : brands) {
            Brand savedBrand = this.saveBrand(brand);
            savedBrands.add(savedBrand);
        }
        return savedBrands;
    }

    public Optional<Brand> getBrandById(long id) {
        return addressDao.findById(id);
    }

    public List<Brand> getBrandAll() {
        return addressDao.findAll();
    }

}
