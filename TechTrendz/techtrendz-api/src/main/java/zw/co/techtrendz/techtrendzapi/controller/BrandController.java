/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.controller;

import com.fasterxml.jackson.annotation.JsonView;
import jakarta.validation.Valid;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import zw.co.techtrendz.techtrendzapi.entity.Brand;
import zw.co.techtrendz.techtrendzapi.service.BrandService;
import zw.co.techtrendz.techtrendzapi.views.View;

/**
 *
 * @author smadzudzo
 */
@RestController
public class BrandController {

    @Autowired
    private BrandService brandService;

    @RequestMapping(name = "/savebrand", value = "/savebrand", method = RequestMethod.POST)
    public Brand saveBrand(@Valid @RequestBody Brand brand) {
        return brandService.saveBrand(brand);
    }

    @RequestMapping(name = "/getbrandbyid", value = "/getbrandbyid", method = RequestMethod.GET)
    public Optional<Brand> getBrandById(@RequestParam(required = true) Long id) {
        return brandService.getBrandById(id);
    }

    @RequestMapping(name = "/getbrandall", value = "/getbrandall", method = RequestMethod.GET)
    public List<Brand> getBrandAll() {
        return brandService.getBrandAll();
    }

}
