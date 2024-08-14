/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
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
public class Checkout {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToMany
    @JoinTable(
            name = "checkoutProduct",
            joinColumns = @JoinColumn(name = "checkoutId"),
            inverseJoinColumns = @JoinColumn(name = "productId"))
    private Set<ProductItem> productItems;

    @ManyToOne
    @JoinColumn(name = "userId", nullable = false)
    private Users user;
    
    @ManyToOne
    private CheckoutStatus checkoutStatus;
}
