/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service.impl;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import zw.co.techtrendz.techtrendzapi.entity.Role;
import zw.co.techtrendz.techtrendzapi.entity.Users;
import zw.co.techtrendz.techtrendzapi.repository.UserDao;
import zw.co.techtrendz.techtrendzapi.service.UserService;

/**
 *
 * @author smadzudzo
 */
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    public Users saveUser(Users user) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        user.setUsername(user.getUsername());

        String encodedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);

        return userDao.save(user);
    }

    public List<Users> saveUsers(List<Users> users) {
        List<Users> savedUsers = new ArrayList<>();
        users.forEach(user -> {
            Users savedUser = this.saveUser(user);
            savedUsers.add(savedUser);
        });
        return savedUsers;
    }

    public Optional<Users> getUserById(long id) {
        return userDao.findById(id);
    }

    public List<Users> getUserAll() {
        return userDao.findAll();
    }

    public List<Users> getUserByRole(Role role) {
        Users user = new Users();
        Set<Role> roles = new HashSet<Role>();
        roles.add(role);
        user.setRoles(roles);

//        ExampleMatcher matcher = ExampleMatcher.matching()
//                .withIgnorePaths("lastname")
//                .withIncludeNullValues()
//                .withStringMatcher(StringMatcher.ENDING);
//        Example<Person> example = Example.of(person, matcher);
        Example<Users> userExample = Example.of(user);
        return userDao.findAll(userExample);
    }

    public Users getUserByUsername(String username) {
        Users user = new Users();
        user.setUsername(username);
        Example userExample = Example.of(user);
        Optional<Users> requestUser = userDao.findBy(userExample, q -> q
                .sortBy(Sort.by("username").descending())
                .first());
        return requestUser.isPresent() ? requestUser.get() : null;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Users user = new Users();
        user.setUsername(username);
        Example userExample = Example.of(user);
        Optional<Users> requestUser = userDao.findBy(userExample, q -> q
                .sortBy(Sort.by("username").descending())
                .first());
        if (requestUser.isEmpty()) {
            throw new UsernameNotFoundException("User not found");
        }

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////HACK TO WORK WITH UNENCODED PASSWORDS//////////////////////////////////////////
        // BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        // requestUser.get().setPassword(passwordEncoder.encode(requestUser.get().getPassword()));
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        return requestUser.isPresent() ? requestUser.get() : null;
    }
}
