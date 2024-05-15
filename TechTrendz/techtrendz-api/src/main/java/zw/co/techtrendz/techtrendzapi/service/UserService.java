/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service;

import java.util.List;
import java.util.Optional;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;
import zw.co.techtrendz.techtrendzapi.entity.Role;
import zw.co.techtrendz.techtrendzapi.entity.Users;

/**
 *
 * @author smadzudzo
 */
@Service
public interface UserService extends UserDetailsService {

    public Users saveUser(Users user);

    public Optional<Users> getUserById(long id);

    public List<Users> getUserAll();

    public List<Users> getUserByRole(Role role);

//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException;

}
