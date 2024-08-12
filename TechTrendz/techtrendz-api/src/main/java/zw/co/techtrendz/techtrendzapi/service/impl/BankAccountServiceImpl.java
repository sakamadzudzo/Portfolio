/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service.impl;

import java.time.LocalDateTime;
import java.util.ArrayList;
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
    private BankAccountDao bankAccountDao;

    public BankAccount saveBankAccount(BankAccount bankAccount) {
        if (bankAccount.getId() == null || bankAccount.getId() == 0) {
            bankAccount.setDateTimeOpened(LocalDateTime.now());
        }
        return bankAccountDao.save(bankAccount);
    }

    public List<BankAccount> saveBankAccounts(List<BankAccount> bankAccounts) {
        List<BankAccount> savedBankAccounts = new ArrayList<>();
        bankAccounts.forEach(bankAccount -> {
            savedBankAccounts.add(this.saveBankAccount(bankAccount));
        });
        return savedBankAccounts;
    }

    public Optional<BankAccount> getBankAccountById(long id) {
        return bankAccountDao.findById(id);
    }

    public List<BankAccount> getBankAccountAll() {
        return bankAccountDao.findAll();
    }

}
