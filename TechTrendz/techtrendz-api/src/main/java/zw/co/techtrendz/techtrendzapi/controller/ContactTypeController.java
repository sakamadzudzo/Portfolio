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
import zw.co.techtrendz.techtrendzapi.entity.ContactType;
import zw.co.techtrendz.techtrendzapi.service.ContactTypeService;

/**
 *
 * @author smadzudzo
 */
@RestController
public class ContactTypeController {

    @Autowired
    private ContactTypeService contactTypeService;

    @RequestMapping(name = "/savecontacttype", value = "/savecontacttype", method = RequestMethod.POST)
    public ContactType saveContactType(@Valid @RequestBody ContactType contactType) {
        return contactTypeService.saveContactType(contactType);
    }

    @RequestMapping(name = "/getcontacttypebyid", value = "/getcontacttypebyid", method = RequestMethod.GET)
    public Optional<ContactType> getContactTypeById(@RequestParam(required = true) Long id) {
        return contactTypeService.getContactTypeById(id);
    }

    @RequestMapping(name = "/getcontacttypeall", value = "/getcontacttypeall", method = RequestMethod.GET)
    public List<ContactType> getContactTypeAll() {
        return contactTypeService.getContactTypeAll();
    }

}
