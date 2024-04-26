/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.controller;

import jakarta.validation.Valid;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import zw.co.techtrendz.techtrendzapi.entity.Role;
import zw.co.techtrendz.techtrendzapi.entity.User;
import zw.co.techtrendz.techtrendzapi.service.UserService;

/**
 *
 * @author smadzudzo
 */
@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping(name = "/saveuser", value = "/saveuser", method = RequestMethod.POST)
    public User saveUser(@Valid @RequestBody User user) {
        return userService.saveUser(user);
    }

    @RequestMapping(name = "/getuserbyid", value = "/getuserbyid", method = RequestMethod.GET)
    public Optional<User> getUserById(@Valid @RequestBody User user) {
        return userService.getUserById(user.getId());
    }

    @RequestMapping(name = "/getuserall", value = "/getuserall", method = RequestMethod.GET)
    public List<User> getUserAll() {
        return userService.getUserAll();
    }

    @RequestMapping(name = "/getuserbyrole", value = "/getuserbyrole", method = RequestMethod.GET)
    public List<User> getUserByRole(@Valid @RequestBody Role role) {
        return userService.getUserByRole(role);
    }

}
