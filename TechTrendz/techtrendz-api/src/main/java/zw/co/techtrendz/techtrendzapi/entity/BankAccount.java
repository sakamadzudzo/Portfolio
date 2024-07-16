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
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.time.LocalDateTime;
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
public class BankAccount {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(unique = true, nullable = false)
    private Long accountNumber;

    @NotNull
    @Column(nullable = false)
    private String bankName;

    @NotNull
    @Column(nullable = false)
    private String branchName;

    @NotNull
    @Column(nullable = false)
    private String ifscCode;

    @ManyToOne
    @JoinColumn(name = "accountHolderAddress", nullable = false)
    private Address address;

    @Column(nullable = false)
    private LocalDateTime dateTimeOpened = LocalDateTime.now();

    @ManyToOne
    @JoinColumn(name = "userId", nullable = false)
    private Users user;
}
