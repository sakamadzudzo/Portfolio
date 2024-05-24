/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service.impl;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.stereotype.Service;
import zw.co.techtrendz.techtrendzapi.entity.Salutation;
import zw.co.techtrendz.techtrendzapi.repository.SalutationDao;
import zw.co.techtrendz.techtrendzapi.service.SalutationService;

/**
 *
 * @author smadzudzo
 */
@Service
public class SalutationServiceImpl implements SalutationService {

    @Autowired
    private SalutationDao salutationDao;

    public Salutation saveSalutation(Salutation salutation) {
        return salutationDao.save(salutation);
    }

    public Optional<Salutation> getSalutationById(long id) {
        return salutationDao.findById(id);
    }

    public Optional<Salutation> getSalutationByTitle(String title) {
        Salutation salutation = new Salutation();
        salutation.setTitle(title);
        ExampleMatcher matcher = ExampleMatcher.matching()
                .withMatcher("title", match -> match.ignoreCase());
        Example<Salutation> salutationExample = Example.of(salutation, matcher);
        return salutationDao.findOne(salutationExample);
    }

    public List<Salutation> getSalutationAll() {
        return salutationDao.findAll();
    }

}
