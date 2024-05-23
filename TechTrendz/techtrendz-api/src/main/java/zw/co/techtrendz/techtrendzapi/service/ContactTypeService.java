/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service;

import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;
import zw.co.techtrendz.techtrendzapi.entity.ContactType;

/**
 *
 * @author smadzudzo
 */
@Service
public interface ContactTypeService {

    public ContactType saveContactType(ContactType contactType);

    public List<ContactType> saveContactTypes(List<ContactType> contactTypes);

    public Optional<ContactType> getContactTypeById(long id);

    public Optional<ContactType> getContactTypeByName(String name);

    public List<ContactType> getContactTypeAll();
}
