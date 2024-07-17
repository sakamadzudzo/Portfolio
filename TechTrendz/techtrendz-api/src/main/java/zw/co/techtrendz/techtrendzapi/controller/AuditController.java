/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.controller;

import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import zw.co.techtrendz.techtrendzapi.entity.Brand;
import zw.co.techtrendz.techtrendzapi.service.AuditService;

/**
 *
 * @author smadzudzo
 */
@RestController
public class AuditController {

    @Autowired
    private AuditService auditService;

    @RequestMapping(name = "/getbrandhistory", value = "/getbrandhistory", method = RequestMethod.GET)
    public String getBrandHistory(@RequestParam Integer revision) {
        return auditService.getBrandHistory(revision);
    }
}
