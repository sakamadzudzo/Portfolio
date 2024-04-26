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
import org.springframework.web.bind.annotation.RestController;
import zw.co.techtrendz.techtrendzapi.entity.BankAccount;
import zw.co.techtrendz.techtrendzapi.service.BankAccountService;

/**
 *
 * @author smadzudzo
 */
@RestController
public class BankAccountController {

    @Autowired
    private BankAccountService bankAccountService;

    @RequestMapping(name = "/savebankaccount", value = "/savebankaccount", method = RequestMethod.POST)
    public BankAccount saveBankAccount(@Valid @RequestBody BankAccount bankAccount) {
        return bankAccountService.saveBankAccount(bankAccount);
    }

    @RequestMapping(name = "/getbankaccountbyid", value = "/getbankaccountbyid", method = RequestMethod.GET)
    public Optional<BankAccount> getBankAccountById(@Valid @RequestBody BankAccount bankAccount) {
        return bankAccountService.getBankAccountById(bankAccount.getId());
    }

    @RequestMapping(name = "/getbankaccountall", value = "/getbankaccountall", method = RequestMethod.GET)
    public List<BankAccount> getBankAccountAll() {
        return bankAccountService.getBankAccountAll();
    }

}
