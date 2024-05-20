/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service.impl;

import java.util.Arrays;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.GrantedAuthority;
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
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        requestUser.get().setPassword(passwordEncoder.encode(requestUser.get().getPassword()));
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        return requestUser.isPresent() ? requestUser.get() : null;
    }

    private void insertDummyUsers() {
        List<Users> users = Arrays.asList(
                new Users(null, "Erick", "Leonard", "Abraham", "test", "elabraham", null, null, null),
                new Users(null, "Gretchen", null, "Proctor", "test", "gproctor", null, null, null),
                new Users(null, "Robbie", "Wilkins", "Erich", "test", "rwerich", null, null, null),
                new Users(null, "Heath", "Dickson", "Cherie", "test", "hdcherie", null, null, null),
                new Users(null, "Brandie", "Finley", "Arthur", "test", "bfarthur", null, null, null),
                new Users(null, "Robinson", null, "Lara", "test", "rlara", null, null, null),
                new Users(null, "Randal", null, "Dickerson", "test", "rdickerson", null, null, null),
                new Users(null, "Keri", null, "Lesley", "test", "klesley", null, null, null),
                new Users(null, "Roberta", null, "Morse", "test", "rmorse", null, null, null),
                new Users(null, "Cornelius", "Herring", "Emily", "test", "chemily", null, null, null),
                new Users(null, "Saka", "Shingirai", "Madzudzo", "test", "ssmadzudzo", null, null, null)
        );
        userDao.saveAll(users);
    }

}
