/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service;

import java.util.List;
import org.springframework.stereotype.Service;
import zw.co.techtrendz.techtrendzapi.entity.Brand;

/**
 *
 * @author smadzudzo
 */
@Service
public interface AuditService {

    public List<Brand> getBrandHistory(int revision);
}
