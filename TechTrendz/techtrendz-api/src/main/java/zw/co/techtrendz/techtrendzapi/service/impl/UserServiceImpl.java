/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service.impl;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import zw.co.techtrendz.techtrendzapi.entity.Role;
import zw.co.techtrendz.techtrendzapi.entity.User;
import zw.co.techtrendz.techtrendzapi.repository.UserDao;
import zw.co.techtrendz.techtrendzapi.service.UserService;

/**
 *
 * @author smadzudzo
 */
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;
    @Autowired
    private UserDao userDao;

    public User saveUser(User user) {
        user.setUsername(user.getUsername());

        String encodedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);

        return userDao.save(user);
    }

    public Optional<User> getUserById(long id) {
        return userDao.findById(id);
    }

    public List<User> getUserAll() {
        return userDao.findAll();
    }

    public List<User> getUserByRole(Role role) {
        User user = new User();
        Set<Role> roles = new HashSet<Role>();
        roles.add(role);
        user.setRoles(roles);

//        ExampleMatcher matcher = ExampleMatcher.matching()
//                .withIgnorePaths("lastname")
//                .withIncludeNullValues()
//                .withStringMatcher(StringMatcher.ENDING);
//        Example<Person> example = Example.of(person, matcher);
        Example<User> userExample = Example.of(user);
        return userDao.findAll(userExample);
    }

}
