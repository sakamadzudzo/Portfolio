/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.entity;

import jakarta.validation.constraints.NotNull;
import java.util.Set;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 *
 * @author smadzudzo
 */
@AllArgsConstructor
@NoArgsConstructor
@Data
public class UsersDto {

    @NotNull
    private String username;

    @NotNull
    private String password;

    private Set<Role> roles;
}
