/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.NotNull;
import java.util.Set;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.envers.Audited;

/**
 *
 * @author smadzudzo
 */
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Audited
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    @NotNull
    private String name;

    @Column(columnDefinition = "TEXT")

    private String description;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "brand.id", nullable = false)
    @NotNull
    private Brand brand;

    @OneToOne(fetch = FetchType.LAZY)
    @NotNull
    @JoinColumn(name = "productType.id", nullable = false)
    private ProductType productType;

    @OneToOne(fetch = FetchType.LAZY)
    @NotNull
    @JoinColumn(name = "productStatus.id", nullable = false)
    private ProductStatus productStatus;

    @NotNull
    @Column(nullable = false, unique = true)
    private String serialNumber;

    @ManyToMany(mappedBy = "products")
    private Set<Cart> carts;
}
