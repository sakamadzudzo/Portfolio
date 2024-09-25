/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.config;

import org.springframework.context.ApplicationContext;
import org.hibernate.envers.RevisionListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContextAware;
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
public class AuditUserListener implements RevisionListener, ApplicationContextAware {

    private static ApplicationContext applicationContext;

    @Override
    public void setApplicationContext(ApplicationContext context) {
        applicationContext = context;
    }

    @Override
    public void newRevision(Object revisionEntity) {
        UserService userService = applicationContext.getBean(UserService.class);
        final AuditEntity auditEntity = (AuditEntity) revisionEntity;
        Users user = new Users(0);
        user.setUsername("SYSTEM");
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null) {
            String currentUsername = authentication.getName();
            Users loadedUser = userService.getUserByUsername(currentUsername);
            if (loadedUser != null) {
                user = loadedUser;
            }
        }
        auditEntity.setUserId(user.getId());
        auditEntity.setUsername(user.getUsername().toUpperCase());
    }
}
