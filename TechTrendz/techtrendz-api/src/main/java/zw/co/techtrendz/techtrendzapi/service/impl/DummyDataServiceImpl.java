/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service.impl;

import jakarta.annotation.PostConstruct;
import java.util.Arrays;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Service;
import zw.co.techtrendz.techtrendzapi.entity.ContactType;
import zw.co.techtrendz.techtrendzapi.entity.Salutation;
import zw.co.techtrendz.techtrendzapi.entity.Users;
import zw.co.techtrendz.techtrendzapi.service.ContactTypeService;
import zw.co.techtrendz.techtrendzapi.service.SalutationService;
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
    @Autowired
    private SalutationService salutationService;
    @Autowired
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    @PostConstruct
    private void insertDummyData() {
        salutationService.saveSalutation(new Salutation(null, "Mr", "Mr"));
        salutationService.saveSalutation(new Salutation(null, "Miss", "Miss"));
        salutationService.saveSalutation(new Salutation(null, "Mrs", "Mrs"));
        salutationService.saveSalutation(new Salutation(null, "Dr", "Dr"));

        List<Users> users = Arrays.asList(
                new Users(null, new Salutation(1L), "Erick", "Leonard", "Abraham", "test", "elabraham", null, null, null),
                new Users(null, new Salutation(1L), "Gretchen", null, "Proctor", "test", "gproctor", null, null, null),
                new Users(null, new Salutation(1L), "Robbie", "Wilkins", "Erich", "test", "rwerich", null, null, null),
                new Users(null, new Salutation(1L), "Heath", "Dickson", "Cherie", "test", "hdcherie", null, null, null),
                new Users(null, new Salutation(1L), "Brandie", "Finley", "Arthur", "test", "bfarthur", null, null, null),
                new Users(null, new Salutation(1L), "Robinson", null, "Lara", "test", "rlara", null, null, null),
                new Users(null, new Salutation(1L), "Randal", null, "Dickerson", "test", "rdickerson", null, null, null),
                new Users(null, new Salutation(2L), "Keri", null, "Lesley", "test", "klesley", null, null, null),
                new Users(null, new Salutation(1L), "Roberta", null, "Morse", "test", "rmorse", null, null, null),
                new Users(null, new Salutation(1L), "Cornelius", "Herring", "Emily", "test", "chemily", null, null, null),
                new Users(null, new Salutation(1L), "Saka", "Shingirai", "Madzudzo", "test", "ssmadzudzo", null, null, null)
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
        
        StringBuilder sqls = "INSERT INTO users_roles( users_id, roles_id ) VALUES ( 1, 1 );\n" +
"INSERT INTO users_roles( users_id, roles_id ) VALUES ( 2, 1 );\n" +
"INSERT INTO users_roles( users_id, roles_id ) VALUES ( 3, 1 );\n" +
"INSERT INTO users_roles( users_id, roles_id ) VALUES ( 4, 1 );\n" +
"INSERT INTO users_roles( users_id, roles_id ) VALUES ( 5, 1 );\n" +
"INSERT INTO users_roles( users_id, roles_id ) VALUES ( 6, 1 );\n" +
"INSERT INTO users_roles( users_id, roles_id ) VALUES ( 7, 1 );\n" +
"INSERT INTO users_roles( users_id, roles_id ) VALUES ( 8, 1 );\n" +
"INSERT INTO users_roles( users_id, roles_id ) VALUES ( 9, 1 );\n" +
"INSERT INTO users_roles( users_id, roles_id ) VALUES ( 10, 1 );\n" +
"INSERT INTO users_roles( users_id, roles_id ) VALUES ( 11, 1 );\n" +
"INSERT INTO users_roles( users_id, roles_id ) VALUES ( 11, 2 );\n" +
"INSERT INTO users_roles( users_id, roles_id ) VALUES ( 11, 3 );\n" +
"\n" +
"INSERT INTO useraddress( address_id, user_id ) VALUES ( 34, 1 ); \n" +
"INSERT INTO useraddress( address_id, user_id ) VALUES ( 68, 1 ); \n" +
"INSERT INTO useraddress( address_id, user_id ) VALUES ( 75, 1 ); \n" +
"INSERT INTO useraddress( address_id, user_id ) VALUES ( 87, 1 ); \n" +
"INSERT INTO useraddress( address_id, user_id ) VALUES ( 72, 2 ); \n" +
"INSERT INTO useraddress( address_id, user_id ) VALUES ( 58, 3 ); \n" +
"INSERT INTO useraddress( address_id, user_id ) VALUES ( 18, 4 ); \n" +
"INSERT INTO useraddress( address_id, user_id ) VALUES ( 31, 4 ); \n" +
"INSERT INTO useraddress( address_id, user_id ) VALUES ( 26, 5 ); \n" +
"INSERT INTO useraddress( address_id, user_id ) VALUES ( 62, 6 ); \n" +
"INSERT INTO useraddress( address_id, user_id ) VALUES ( 73, 8 ); \n" +
"INSERT INTO useraddress( address_id, user_id ) VALUES ( 72, 11 ); \n" +
"INSERT INTO useraddress( address_id, user_id ) VALUES ( 84, 11 );"
    }
}
