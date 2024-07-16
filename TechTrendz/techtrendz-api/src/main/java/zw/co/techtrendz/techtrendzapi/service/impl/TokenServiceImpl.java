/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service.impl;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import zw.co.techtrendz.techtrendzapi.entity.Users;
import zw.co.techtrendz.techtrendzapi.service.TokenService;

/**
 *
 * @author smadzudzo
 */
@Service
public class TokenServiceImpl implements TokenService {

    @Value("${secret.key}")
    private String secret;
    @Value("${jwt.expiration}")
    private int expiration;

    public String getTokenFrom(String bearerToken) {
        final String bearer = "Bearer ";
        if (bearerToken == null || !bearerToken.startsWith(bearer)) {
            throw new JWTVerificationException("Invalid Authorization Header");
        }
        String token = bearerToken.substring(bearer.length());
        return token;
    }

    public String getSubjectFrom(String token) {
        Algorithm algorithm = Algorithm.HMAC256(secret.getBytes());
        JWTVerifier verifier = JWT.require(algorithm).build();
        DecodedJWT decodedJWT = verifier.verify(token);  // throws JWTVerificationException if not valid
        return decodedJWT.getSubject();
    }

    public String generateToken(Users user) {
        Algorithm algorithm = Algorithm.HMAC256(secret.getBytes());
        Instant expiration = generateExpirationTimeIn(this.expiration);
        String roles = user.getRoles().stream().map(role -> role.getName()).collect(Collectors.joining(","));
        String token = JWT.create()
                .withSubject(user.getUsername())
                .withIssuedAt(LocalDateTime.now().atZone(ZoneId.systemDefault()).toInstant())
                .withExpiresAt(expiration)
                .withIssuer("TechTrendz-API")
                .withClaim("roles", roles)
                .sign(algorithm);
        return token;
    }

    private Instant generateExpirationTimeIn(int minutes) {
        return LocalDateTime.now().plusMinutes(minutes).atZone(ZoneId.systemDefault()).toInstant();
    }
}
