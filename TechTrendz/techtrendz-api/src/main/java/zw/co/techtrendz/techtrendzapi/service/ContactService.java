/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service;

import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;
import zw.co.techtrendz.techtrendzapi.entity.Contact;

/**
 *
 * @author smadzudzo
 */
@Service
public interface ContactService {

    public Contact saveContact(Contact contact);

    public Optional<Contact> getContactById(long id);

    public List<Contact> getContactAll();

    public List<Contact> getContactAllByContactTypeId(Long contactTypeId);

    public List<Contact> getContactAllByUserId(Long userId);

    public List<Contact> getContactAllByUserIdByContactTypeId(Long userId, Long contactTypeId);
}
