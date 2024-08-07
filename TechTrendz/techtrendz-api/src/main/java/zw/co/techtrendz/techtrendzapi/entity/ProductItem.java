/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.entity;

import com.fasterxml.jackson.annotation.JsonView;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotNull;
import java.util.Set;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.envers.Audited;
import zw.co.techtrendz.techtrendzapi.views.View;

/**
 *
 * @author smadzudzo
 */
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Audited
public class ProductItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @NotNull
    @JoinColumn(name = "productStatus_id", nullable = false)
    private ProductStatus productStatus;

    @ManyToOne
    @NotNull
    @JsonView({View.CartView.class, View.ProductItemView.class})
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    @ManyToMany(mappedBy = "productItems")
    @JsonView({View.ProductItemView.class, View.ProductView.class})
    private Set<Cart> carts;

    @NotNull
    @Column(nullable = false, unique = true)
    private String serialNumber;

    public ProductItem(long id) {
        this.id = id;
    }
}
