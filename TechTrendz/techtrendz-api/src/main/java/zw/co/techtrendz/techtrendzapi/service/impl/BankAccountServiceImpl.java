/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service.impl;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import zw.co.techtrendz.techtrendzapi.entity.BankAccount;
import zw.co.techtrendz.techtrendzapi.repository.BankAccountDao;
import zw.co.techtrendz.techtrendzapi.service.BankAccountService;

/**
 *
 * @author smadzudzo
 */
@Service
public class BankAccountServiceImpl implements BankAccountService {

    @Autowired
    private BankAccountDao addressDao;

    public BankAccount saveBankAccount(BankAccount address) {
        return addressDao.save(address);
    }

    public Optional<BankAccount> getBankAccountById(long id) {
        return addressDao.findById(id);
    }

    public List<BankAccount> getBankAccountAll() {
        return addressDao.findAll();
    }

}
