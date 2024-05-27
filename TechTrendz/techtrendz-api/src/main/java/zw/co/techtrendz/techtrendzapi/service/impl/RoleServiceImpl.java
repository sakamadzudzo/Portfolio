/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import zw.co.techtrendz.techtrendzapi.entity.Role;
import zw.co.techtrendz.techtrendzapi.repository.RoleDao;
import zw.co.techtrendz.techtrendzapi.service.RoleService;

/**
 *
 * @author smadzudzo
 */
@Service
public class RoleServiceImpl implements RoleService {

    @Autowired
    private RoleDao addressDao;

    public Role saveRole(Role address) {
        return addressDao.save(address);
    }

    public List<Role> saveRoles(List<Role> roles) {
        List<Role> savedRoles = new ArrayList<>();
        for (Role role : roles) {
            Role savedRole = this.saveRole(role);
            savedRoles.add(savedRole);
        }
        return savedRoles;
    }

    public Optional<Role> getRoleById(long id) {
        return addressDao.findById(id);
    }

    public List<Role> getRoleAll() {
        return addressDao.findAll();
    }

}
