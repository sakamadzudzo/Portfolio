/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service.impl;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import zw.co.techtrendz.techtrendzapi.entity.Users;
import zw.co.techtrendz.techtrendzapi.service.AuthenticationService;
import zw.co.techtrendz.techtrendzapi.service.TokenService;
import zw.co.techtrendz.techtrendzapi.service.UserService;

/**
 *
 * @author smadzudzo
 */
@Service
public class AuthenticationServiceImpl implements AuthenticationService {

    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private TokenService tokenService;
    @Autowired
    private UserService userService;

    public ResponseEntity<String> authenticate(String username, String password) {
        String error = "";
        try {
            var checkUser = userService.loadUserByUsername(username);
            if (checkUser == null) {
                return ResponseEntity.badRequest().body("User not found");
            }
            // The authentication manager provides secure authentication and throws exception if it fails
            var authToken = new UsernamePasswordAuthenticationToken(username, password);
            Authentication authenticate = authenticationManager.authenticate(authToken);
            var user = (Users) authenticate.getPrincipal();
            String token = tokenService.generateToken(user);
            return ResponseEntity.ok(token);
        } catch (UsernameNotFoundException e) {
//            return ResponseEntity.badRequest().body("User not found");
            error = "User not found";
        } catch (AuthenticationException e) {
            error = "Invalid password";
        }
        return ResponseEntity.badRequest().body(error);
    }

    public UserDetails getPrincipal(HttpServletRequest request) {
        String authorizationHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        String token = tokenService.getTokenFrom(authorizationHeader);
        String userEmail = tokenService.getSubjectFrom(token);
        UserDetails user = userService.loadUserByUsername(userEmail);
        return user;
    }
}
