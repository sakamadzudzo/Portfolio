/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;
import zw.co.techtrendz.techtrendzapi.entity.ContactType;
import zw.co.techtrendz.techtrendzapi.repository.ContactTypeDao;
import zw.co.techtrendz.techtrendzapi.service.ContactTypeService;

/**
 *
 * @author smadzudzo
 */
@Service
public class ContactTypeServiceImpl implements ContactTypeService {

    @Autowired
    private ContactTypeDao contactTypeDao;

    public ContactType saveContactType(ContactType contactType) {
        contactType.setName(contactType.getName().toUpperCase());
        return contactTypeDao.save(contactType);
    }

    public List<ContactType> saveContactTypes(List<ContactType> contactTypes) {
        List<ContactType> savedContactTypes = new ArrayList<>();
        contactTypes.forEach(contactType -> {
            ContactType savedContactType = this.saveContactType(contactType);
            savedContactTypes.add(savedContactType);
        });
        return savedContactTypes;
    }

    public Optional<ContactType> getContactTypeById(long id) {
        return contactTypeDao.findById(id);
    }

    public Optional<ContactType> getContactTypeByName(String name) {
        ContactType contactType = new ContactType();
        contactType.setName(name);
        Example<ContactType> contactTypeExample = Example.of(contactType);
        return contactTypeDao.findOne(contactTypeExample);
    }

    public List<ContactType> getContactTypeAll() {
        return contactTypeDao.findAll();
    }
}
