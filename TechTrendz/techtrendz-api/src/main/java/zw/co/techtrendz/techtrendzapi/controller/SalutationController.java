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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import zw.co.techtrendz.techtrendzapi.entity.Salutation;
import zw.co.techtrendz.techtrendzapi.service.SalutationService;

/**
 *
 * @author smadzudzo
 */
@RestController
public class SalutationController {

    @Autowired
    private SalutationService salutationService;

    @RequestMapping(name = "/savesalutation", value = "/savesalutation", method = RequestMethod.POST)
    public Salutation saveSalutation(@Valid @RequestBody Salutation salutation) {
        return salutationService.saveSalutation(salutation);
    }

    @RequestMapping(name = "/getsalutationbyid", value = "/getsalutationbyid", method = RequestMethod.GET)
    public Optional<Salutation> getSalutationById(@RequestParam(required = true) Long id) {
        return salutationService.getSalutationById(id);
    }

    @RequestMapping(name = "/getsalutationbytitle", value = "/getsalutationbytitle", method = RequestMethod.GET)
    public Optional<Salutation> getSalutationByTitle(@RequestParam(required = true) String title) {
        return salutationService.getSalutationByTitle(title);
    }

    @RequestMapping(name = "/getsalutationall", value = "/getsalutationall", method = RequestMethod.GET)
    public List<Salutation> getSalutationAll() {
        return salutationService.getSalutationAll();
    }
}
