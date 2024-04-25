/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
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
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private Long houseNumber;

    private String street;

    private String line1;

    private String line2;

    @NotNull
    private String city;

    private String state;

    private String province;

    @NotNull
    private String country;

    private String postalCode;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "userAddress",
            joinColumns = @JoinColumn(name = "addressId"),
            inverseJoinColumns = @JoinColumn(name = "userId"))
    private Set<User> users;
}
