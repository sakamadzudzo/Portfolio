/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.controller;

import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import zw.co.techtrendz.techtrendzapi.entity.UsersDto;
import zw.co.techtrendz.techtrendzapi.service.AuthenticationService;

/**
 *
 * @author smadzudzo
 */
@RestController
public class AuthController {

//    @Autowired
//    private AuthenticationManager authenticationManager;
    @Autowired
    private AuthenticationService authenticationService;

//    @RequestMapping(name = "/signin", value = "/signin", method = RequestMethod.POST)
//    public ResponseEntity<String> authenticateUser(@RequestBody UsersDto usersDto) {
//        System.out.println("\n\n\n===============================\n\n\n\n\t\tEndpoint called\n\n\n\n===============================");
//        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
//                usersDto.getUsername(), usersDto.getPassword()));
//
//        SecurityContextHolder.getContext().setAuthentication(authentication);
//        return new ResponseEntity<>("User signed-in successfully!.", HttpStatus.OK);
//    }

    @RequestMapping(name = "/test", value = "/test", method = RequestMethod.POST)
    public String test(@RequestBody TestVal value) {
        return "This is your post: " + value.getValue();
    }

    @RequestMapping(name = "/signin", value = "/signin", method = RequestMethod.POST)
    public ResponseEntity<String> login(@RequestBody @Valid UsersDto user) {
        var token = authenticationService.authenticate(user.getUsername(), user.getPassword());
        return ResponseEntity.ok(token);
    }
}

@Data
@AllArgsConstructor
@NoArgsConstructor
class TestVal {

    private String value;
}
