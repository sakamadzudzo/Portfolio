/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.entity;

import java.util.ArrayList;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.domain.Sort;

/**
 *
 * @author smadzudzo
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PagedProductsRequestDto {

    private Integer pageNumber = 1;
    private Integer pageSize = 25;
    private List<String> sortFields = new ArrayList<>();
    private Sort.Direction sortDirection = Sort.Direction.ASC;
    private Product exampleProduct;
}
