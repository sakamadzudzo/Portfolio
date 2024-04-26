/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.controller;

import jakarta.validation.Valid;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import zw.co.techtrendz.techtrendzapi.entity.Role;
import zw.co.techtrendz.techtrendzapi.service.RoleService;

/**
 *
 * @author smadzudzo
 */
@RestController
public class RoleController {

    @Autowired
    private RoleService roleService;

    @RequestMapping(name = "/saverole", value = "/saverole", method = RequestMethod.POST)
    public Role saveRole(@Valid @RequestBody Role role) {
        return roleService.saveRole(role);
    }

    @RequestMapping(name = "/getrolebyid", value = "/getrolebyid", method = RequestMethod.GET)
    public Optional<Role> getRoleById(@Valid @RequestBody Role role) {
        return roleService.getRoleById(role.getId());
    }

    @RequestMapping(name = "/getroleall", value = "/getroleall", method = RequestMethod.GET)
    public List<Role> getRoleAll() {
        return roleService.getRoleAll();
    }

}
