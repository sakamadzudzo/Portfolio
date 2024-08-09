/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Column;
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
import java.util.Collection;
import java.util.List;
import java.util.Set;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.envers.Audited;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

/**
 *
 * @author smadzudzo
 */
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Audited
public class Users implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
//    @Column(nullable = true)
    private Salutation salutation;

    private String forename;

    private String otherNames;

    private String lastname;

    @NotNull
    @Column(nullable = false)
    private String username;

    @NotNull
    @Column(nullable = false)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;

    @ManyToMany
    private Set<Role> roles;

    @ManyToMany
    private Set<Address> addresses;

    @ManyToMany
    private Set<BankAccount> bankAccounts;
    
    @ManyToMany
    private Set<Contact> contacts;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority("ROLE_" + roles.stream().map(role -> role.getName())));
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public String getName() {
        String name = "";
        if (this.salutation != null && !this.salutation.getTitle().equals("")) {
            name += this.salutation.getTitle() + ".";
        }
        if (!this.forename.equals("")) {
            if (name.equals("")) {
                name += this.forename;
            } else {
                name += " " + this.forename;
            }
        }
        if (!this.otherNames.equals("")) {
            if (name.equals("")) {
                name += this.otherNames;
            } else {
                name += " " + this.otherNames;
            }
        }
        if (!this.lastname.equals("")) {
            if (name.equals("")) {
                name += this.lastname;
            } else {
                name += " " + this.lastname;
            }
        }
        return name;
    }

    public Users(long id) {
        this.id = id;
    }
}
