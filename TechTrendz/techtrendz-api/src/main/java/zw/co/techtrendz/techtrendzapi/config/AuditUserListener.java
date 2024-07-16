/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.config;

import org.hibernate.envers.RevisionListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import zw.co.techtrendz.techtrendzapi.entity.Users;
import zw.co.techtrendz.techtrendzapi.service.UserService;

/**
 *
 * @author smadzudzo
 */
@Component
public class AuditUserListener implements RevisionListener {

    @Autowired
    private UserService userService;

    @Override
    public void newRevision(Object revisionEntity) {
        final AuditEntity auditEntity = (AuditEntity) revisionEntity;
        Users user = new Users(0);
        user.setUsername("SYSTEM");
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null) {
            String currentUsername = authentication.getName();
            Users loadedUser = userService.getUserByUsername(currentUsername);
            System.out.println("\n\n\n" + loadedUser);
            user.setUsername(currentUsername);
        }
        auditEntity.setUsername(user.getUsername());
    }

}
