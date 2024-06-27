/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

/**
 *
 * @author smadzudzo
 */
@Service
public interface AuthenticationService {

    public ResponseEntity<String> authenticate(String email, String password);

    public UserDetails getPrincipal(HttpServletRequest request);

    public ResponseEntity<String> signout(HttpServletRequest request);
}
