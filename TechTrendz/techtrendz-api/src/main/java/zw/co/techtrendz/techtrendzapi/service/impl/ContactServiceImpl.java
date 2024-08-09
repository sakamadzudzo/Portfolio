/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service.impl;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;
import zw.co.techtrendz.techtrendzapi.entity.Contact;
import zw.co.techtrendz.techtrendzapi.entity.ContactType;
import zw.co.techtrendz.techtrendzapi.entity.Users;
import zw.co.techtrendz.techtrendzapi.repository.ContactDao;
import zw.co.techtrendz.techtrendzapi.service.ContactService;

/**
 *
 * @author smadzudzo
 */
@Service
public class ContactServiceImpl implements ContactService {

    @Autowired
    private ContactDao contactDao;

    public Contact saveContact(Contact contact) {
        return contactDao.save(contact);
    }

    public Optional<Contact> getContactById(long id) {
        return contactDao.findById(id);
    }

    public List<Contact> getContactAll() {
        return contactDao.findAll();
    }

    public List<Contact> getContactAllByContactTypeId(Long contactTypeId) {
        ContactType contactType = new ContactType();
        contactType.setId(contactTypeId);
        Contact contact = new Contact();
        contact.setContactType(contactType);

        Example<Contact> contactExample = Example.of(contact);
        return contactDao.findAll(contactExample);
    }

    public List<Contact> getContactAllByUserId(Long userId) {
        Users user = new Users();
        user.setId(userId);
        Contact contact = new Contact();
//        contact.setUser(user);

        Example<Contact> contactExample = Example.of(contact);
        return contactDao.findAll(contactExample);
    }

    public List<Contact> getContactAllByUserIdByContactTypeId(Long userId, Long contactTypeId) {
        ContactType contactType = new ContactType();
        contactType.setId(contactTypeId);
        Contact contact = new Contact();
        contact.setContactType(contactType);

        Users user = new Users();
        user.setId(userId);
//        contact.setUser(user);

        Example<Contact> contactExample = Example.of(contact);
        return contactDao.findAll(contactExample);
    }

}
