/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service;

import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import zw.co.techtrendz.techtrendzapi.entity.Product;

/**
 *
 * @author smadzudzo
 */
@Service
public interface ProductService {

    public Product saveProduct(Product product);

    public Optional<Product> getProductById(long id);

    public List<Product> getProductAll();

    public Page<Product> getProductAllPaged(int pageNumber, int pageSize, String[] sortFields, Sort.Direction sortDirection);
}
