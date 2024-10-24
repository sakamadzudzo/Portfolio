/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.controller;

import com.fasterxml.jackson.annotation.JsonView;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import zw.co.techtrendz.techtrendzapi.entity.UsersDto;
import zw.co.techtrendz.techtrendzapi.service.AuthenticationService;
import zw.co.techtrendz.techtrendzapi.views.View;

/**
 *
 * @author smadzudzo
 */
@RestController
public class AuthController {

    @Autowired
    private AuthenticationService authenticationService;

    @RequestMapping(name = "/signin", value = "/signin", method = RequestMethod.POST)
    public ResponseEntity<String> login(@RequestBody @Valid UsersDto user) {
//        var token = authenticationService.authenticate(user.getUsername(), user.getPassword());
//        return ResponseEntity.ok(token);
        return authenticationService.authenticate(user.getUsername(), user.getPassword());
    }

    @JsonView({View.MediaFileNormal.class})
    @RequestMapping(name = "/getprincipal", value = "/getprincipal", method = RequestMethod.GET)
    public UserDetails getPrincipal(HttpServletRequest request) {
        return authenticationService.getPrincipal(request);
    }

    @RequestMapping(name = "/signout", value = "/signout", method = RequestMethod.POST)
    public ResponseEntity<String> signout(HttpServletRequest request) {
        return authenticationService.signout(request);
    }

    @RequestMapping(name = "/checkauth", value = "/checkauth", method = RequestMethod.GET)
    public ResponseEntity checkAuth(HttpServletRequest request) {
        return ResponseEntity.ok().build();
    }
}
