/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service;

import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;
import zw.co.techtrendz.techtrendzapi.entity.Role;
import zw.co.techtrendz.techtrendzapi.entity.User;

/**
 *
 * @author smadzudzo
 */
@Service
public interface UserService {

    public User saveUser(User user);

    public Optional<User> getUserById(long id);

    public List<User> getUserAll();

    public List<User> getUserByRole(Role role);
}
