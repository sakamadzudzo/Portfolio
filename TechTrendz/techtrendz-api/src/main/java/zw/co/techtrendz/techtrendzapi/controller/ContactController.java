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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import zw.co.techtrendz.techtrendzapi.entity.Contact;
import zw.co.techtrendz.techtrendzapi.service.ContactService;

/**
 *
 * @author smadzudzo
 */
@RestController
public class ContactController {

    @Autowired
    private ContactService contactService;

    @RequestMapping(name = "/savecontact", value = "/savecontact", method = RequestMethod.POST)
    public Contact saveContact(@Valid @RequestBody Contact contact) {
        return contactService.saveContact(contact);
    }

    @RequestMapping(name = "/getcontactbyid", value = "/getcontactbyid", method = RequestMethod.GET)
    public Optional<Contact> getContactById(@RequestParam(required = true) Long id) {
        return contactService.getContactById(id);
    }

    @RequestMapping(name = "/getcontactall", value = "/getcontactall", method = RequestMethod.GET)
    public List<Contact> getContactAll() {
        return contactService.getContactAll();
    }

}
