/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service;

import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;
import zw.co.techtrendz.techtrendzapi.entity.Brand;

/**
 *
 * @author smadzudzo
 */
@Service
public interface BrandService {

    public Brand saveBrand(Brand brand);

    public List<Brand> saveBrands(List<Brand> brands);

    public Optional<Brand> getBrandById(long id);

    public List<Brand> getBrandAll();
}
