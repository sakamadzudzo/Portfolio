/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service;

import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;
import zw.co.techtrendz.techtrendzapi.entity.BankAccount;

/**
 *
 * @author smadzudzo
 */
@Service
public interface BankAccountService {

    public BankAccount saveBankAccount(BankAccount bankAccount);

    public Optional<BankAccount> getBankAccountById(long id);

    public List<BankAccount> getBankAccountAll();
}
