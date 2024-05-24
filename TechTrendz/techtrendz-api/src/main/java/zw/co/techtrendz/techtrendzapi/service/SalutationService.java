/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service;

import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;
import zw.co.techtrendz.techtrendzapi.entity.Salutation;

/**
 *
 * @author smadzudzo
 */
@Service
public interface SalutationService {

    public Salutation saveSalutation(Salutation salutation);

    public Optional<Salutation> getSalutationById(long id);

    public Optional<Salutation> getSalutationByTitle(String title);

    public List<Salutation> getSalutationAll();
}
