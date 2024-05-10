/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service;

import org.springframework.stereotype.Service;
import zw.co.techtrendz.techtrendzapi.entity.Users;

/**
 *
 * @author smadzudzo
 */
@Service
public interface TokenService {

    public String getTokenFrom(String bearerToken);

    public String getSubjectFrom(String token);

    public String generateToken(Users user);

}
