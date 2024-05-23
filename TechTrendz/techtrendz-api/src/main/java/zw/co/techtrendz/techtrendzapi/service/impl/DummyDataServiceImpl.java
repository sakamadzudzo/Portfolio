/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service.impl;

import jakarta.annotation.PostConstruct;
import java.util.Arrays;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import zw.co.techtrendz.techtrendzapi.entity.ContactType;
import zw.co.techtrendz.techtrendzapi.entity.Users;
import zw.co.techtrendz.techtrendzapi.service.ContactTypeService;
import zw.co.techtrendz.techtrendzapi.service.UserService;

/**
 *
 * @author smadzudzo
 */
@Service
public class DummyDataServiceImpl {

    @Autowired
    private UserService userService;
    @Autowired
    private ContactTypeService contactTypeService;

//    EMAIL, MESSENGER, PHONE, SKYPE, WHATSAPP
    @PostConstruct
    private void insertDummyData() {
        List<Users> users = Arrays.asList(
                new Users(null, "Erick", "Leonard", "Abraham", "test", "elabraham", null, null, null),
                new Users(null, "Gretchen", null, "Proctor", "test", "gproctor", null, null, null),
                new Users(null, "Robbie", "Wilkins", "Erich", "test", "rwerich", null, null, null),
                new Users(null, "Heath", "Dickson", "Cherie", "test", "hdcherie", null, null, null),
                new Users(null, "Brandie", "Finley", "Arthur", "test", "bfarthur", null, null, null),
                new Users(null, "Robinson", null, "Lara", "test", "rlara", null, null, null),
                new Users(null, "Randal", null, "Dickerson", "test", "rdickerson", null, null, null),
                new Users(null, "Keri", null, "Lesley", "test", "klesley", null, null, null),
                new Users(null, "Roberta", null, "Morse", "test", "rmorse", null, null, null),
                new Users(null, "Cornelius", "Herring", "Emily", "test", "chemily", null, null, null),
                new Users(null, "Saka", "Shingirai", "Madzudzo", "test", "ssmadzudzo", null, null, null)
        );
        userService.saveUsers(users);

        List<ContactType> contactTypes = Arrays.asList(
                new ContactType(null, "EMAIL", "Email address"),
                new ContactType(null, "MESSENGER", "Instant messenger"),
                new ContactType(null, "PHONE", "Phone number (with country code)"),
                new ContactType(null, "SKYPE", "Skype ID"),
                new ContactType(null, "WHATSAPP", "WhatsApp number")
        );
        contactTypeService.saveContactTypes(contactTypes);
    }
}
