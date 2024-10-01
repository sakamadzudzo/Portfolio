/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.controller;

import java.time.LocalDateTime;
import java.time.ZoneId;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author smadzudzo
 */
@RestController
public class MiscController {

    @RequestMapping(name = "/ping", value = "/ping", method = RequestMethod.GET)
    public ResponseEntity ping() {
        String msg = "Ping received at:\t" + LocalDateTime.now();
        return ResponseEntity.ok(msg);
//        return ResponseEntity.ok().build();
    }

    @RequestMapping(name = "/pingZoned", value = "/pingZoned", method = RequestMethod.GET)
    public ResponseEntity pingZoned(@RequestParam ZoneId zone) {
        String msg = "Ping received at:\t" + (zone != null && zone.equals("") ? LocalDateTime.now(zone) : LocalDateTime.now());
        return ResponseEntity.ok(msg);
//        return ResponseEntity.ok().build();
    }
}
