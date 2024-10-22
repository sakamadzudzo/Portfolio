/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.controller;

import com.fasterxml.jackson.annotation.JsonView;
import jakarta.validation.Valid;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import zw.co.techtrendz.techtrendzapi.entity.Role;
import zw.co.techtrendz.techtrendzapi.entity.UserDto;
import zw.co.techtrendz.techtrendzapi.entity.Users;
import zw.co.techtrendz.techtrendzapi.entity.UsersDto;
import zw.co.techtrendz.techtrendzapi.service.UserService;
import zw.co.techtrendz.techtrendzapi.views.View;

/**
 *
 * @author smadzudzo
 */
@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @JsonView({View.MediaFileNormal.class})
    @RequestMapping(name = "/saveuser", value = "/saveuser", method = RequestMethod.POST)
    public Users saveUser(@Valid @RequestBody UserDto user) {
        return userService.saveUser(user);
    }

    @JsonView({View.MediaFileNormal.class})
    @RequestMapping(name = "/changepassword", value = "/changepassword", method = RequestMethod.POST)
    public Users changePassword(@Valid @RequestBody UsersDto userDto) {
        return userService.saveUser(userDto);
    }

    @JsonView({View.MediaFileNormal.class})
    @RequestMapping(name = "/getuserbyid", value = "/getuserbyid", method = RequestMethod.GET)
    public Optional<Users> getUserById(@RequestParam(required = true) Long id) {
        return userService.getUserById(id);
    }

    @JsonView({View.MediaFileNormal.class})
    @RequestMapping(name = "/getuserall", value = "/getuserall", method = RequestMethod.GET)
    public List<Users> getUserAll() {
        return userService.getUserAll();
    }

    @JsonView({View.MediaFileNormal.class})
    @RequestMapping(name = "/getuserbyrole", value = "/getuserbyrole", method = RequestMethod.GET)
    public List<Users> getUserByRole(@Valid @RequestBody Role role) {
        return userService.getUserByRole(role);
    }

}
