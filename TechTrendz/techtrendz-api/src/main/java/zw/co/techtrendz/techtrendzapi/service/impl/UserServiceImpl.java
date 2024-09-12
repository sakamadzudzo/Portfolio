/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service.impl;

import java.io.IOException;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.function.Predicate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import zw.co.techtrendz.techtrendzapi.entity.Address;
import zw.co.techtrendz.techtrendzapi.entity.BankAccount;
import zw.co.techtrendz.techtrendzapi.entity.Contact;
import zw.co.techtrendz.techtrendzapi.entity.MediaFile;
import zw.co.techtrendz.techtrendzapi.entity.Role;
import zw.co.techtrendz.techtrendzapi.entity.UserDto;
import zw.co.techtrendz.techtrendzapi.entity.Users;
import zw.co.techtrendz.techtrendzapi.entity.UsersDto;
import zw.co.techtrendz.techtrendzapi.repository.UserDao;
import zw.co.techtrendz.techtrendzapi.service.AddressService;
import zw.co.techtrendz.techtrendzapi.service.BankAccountService;
import zw.co.techtrendz.techtrendzapi.service.ContactService;
import zw.co.techtrendz.techtrendzapi.service.MediaFileService;
import zw.co.techtrendz.techtrendzapi.service.UserService;

/**
 *
 * @author smadzudzo
 */
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;
    @Autowired
    private ContactService contactService;
    @Autowired
    private BankAccountService bankAccountService;
    @Autowired
    private AddressService addressService;
    @Autowired
    private MediaFileService mediaFileService;

    public Users saveUser(UserDto u) {
        // Have to pass in MultipartFile or null here
        Users user = new Users(u.getId(), u.getSalutation(), u.getForename(), u.getOtherNames(), u.getLastname(), u.getUsername(), u.getPassword(), u.getChangePassword(), u.getRoles(), u.getAddresses(), u.getBankAccounts(), u.getContacts(), null);

        if (u.getFiles() != null) {
            try {
                MediaFile mediaFile = mediaFileService.saveFile(u.getFiles());
                user.setProfilePic(mediaFile);
            } catch (IOException ex) {
                // Wrap IOException in a RuntimeException to avoid the unreported exception error
                throw new RuntimeException("Failed to save media file", ex);
            } catch (NoSuchAlgorithmException ex) {
                throw new RuntimeException("Hashing algorithm issue", ex); // Optionally rethrow as a runtime exception
            }
        }

        if (user.getId() == null || user.getId() < 1) {
            BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
            user.setUsername(user.getUsername());

            String encodedPassword = passwordEncoder.encode(user.getPassword());
            user.setPassword(encodedPassword);
        } else {
            Users savedUser = this.getUserById(user.getId()).get();
            user.setPassword(savedUser.getPassword());
//            user.setChangePassword(savedUser.getChangePassword());
        }
        if (user.getContacts() != null) {
            Set<Contact> contacts = new HashSet<>();
            user.getContacts().forEach(contact -> {
                if (contact.getId() == null || contact.getId().equals(0L)) {
                    Contact newContact = contactService.saveContact(contact);
                    contacts.add(newContact);
                } else {
                    contacts.add(contact);
                }
            });
            user.setContacts(contacts);
        }
        if (user.getAddresses() != null) {
            Set<Address> addresses = new HashSet<>();
            user.getAddresses().forEach(address -> {
                if (address.getId() == null || address.getId().equals(0L)) {
                    Address newAddress = addressService.saveAddress(address);
                    addresses.add(newAddress);
                } else {
                    addresses.add(address);
                }
            });
            user.setAddresses(addresses);
        }
        if (user.getBankAccounts() != null) {
            Set<BankAccount> bankAccounts = new HashSet<>();
            user.getBankAccounts().forEach(bankAccount -> {
                if (bankAccount.getId() == null || bankAccount.getId().equals(0L)) {
                    BankAccount newBankAccount = bankAccountService.saveBankAccount(bankAccount);
                    bankAccounts.add(newBankAccount);
                } else {
                    bankAccounts.add(bankAccount);
                }
            });
            user.setBankAccounts(bankAccounts);
        }
        return userDao.save(user);
    }

    public List<Users> saveUsers(List<UserDto> users) {
        List<Users> savedUsers = new ArrayList<>();
        users.forEach(user -> {
            Users savedUser = this.saveUser(user);
            savedUsers.add(savedUser);
        });
        return savedUsers;
    }

    public Users saveUser(UsersDto userDto) {
        Users user = this.getUserByUsername(userDto.getUsername());

        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        user.setUsername(userDto.getUsername());

        String encodedPassword = passwordEncoder.encode(userDto.getPassword());
        user.setPassword(encodedPassword);

        return userDao.save(user);
    }

    public Optional<Users> getUserById(long id) {
        return userDao.findById(id);
    }

    public List<Users> getUserAll() {
        return userDao.findAll();
    }

    public List<Users> getUserByRole(Role role) {
        Users user = new Users();
        Set<Role> roles = new HashSet<Role>();
        roles.add(role);
        user.setRoles(roles);

//        ExampleMatcher matcher = ExampleMatcher.matching()
//                .withIgnorePaths("lastname")
//                .withIncludeNullValues()
//                .withStringMatcher(StringMatcher.ENDING);
//        Example<Person> example = Example.of(person, matcher);
        Example<Users> userExample = Example.of(user);
        return userDao.findAll(userExample);
    }

    public Users getUserByUsername(String username) {
        Users user = new Users();
        user.setUsername(username);
        Example userExample = Example.of(user);
        Optional<Users> requestUser = userDao.findBy(userExample, q -> q
                .sortBy(Sort.by("username").descending())
                .first());
        return requestUser.isPresent() ? requestUser.get() : null;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Users user = new Users();
        user.setUsername(username.strip());
        ExampleMatcher matcher = ExampleMatcher.matching()
                .withIgnoreCase();
        Example userExample = Example.of(user, matcher);
        Optional<Users> requestUser = userDao.findBy(userExample, q -> q
                .sortBy(Sort.by("username").descending())
                .first());
        if (requestUser.isEmpty()) {
            throw new UsernameNotFoundException("User not found");
        }

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////HACK TO WORK WITH UNENCODED PASSWORDS//////////////////////////////////////////
        // BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        // requestUser.get().setPassword(passwordEncoder.encode(requestUser.get().getPassword()));
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        return requestUser.isPresent() ? requestUser.get() : null;
    }
}
