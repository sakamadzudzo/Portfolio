/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service.impl;

import java.util.HashSet;
import java.util.Set;
import org.springframework.stereotype.Service;
import zw.co.techtrendz.techtrendzapi.service.TokenBlacklistService;

/**
 *
 * @author smadzudzo
 */
@Service
public class TokenBlacklistServiceImpl implements TokenBlacklistService {

    private Set<String> blacklist = new HashSet<>();

    @Override
    public void addToBlacklist(String token) {
        blacklist.add(token);
    }

    @Override
    public boolean isBlacklisted(String token) {
        return blacklist.contains(token);
    }
}
