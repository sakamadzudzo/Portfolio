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
import zw.co.techtrendz.techtrendzapi.entity.Tag;
import zw.co.techtrendz.techtrendzapi.service.TagService;

/**
 *
 * @author smadzudzo
 */
@RestController
public class TagController {

    @Autowired
    private TagService tagService;

    @RequestMapping(name = "/savetag", value = "/savetag", method = RequestMethod.POST)
    public Tag saveTag(@Valid @RequestBody Tag tag) {
        return tagService.saveTag(tag);
    }

    @RequestMapping(name = "/gettagbyid", value = "/gettagbyid", method = RequestMethod.GET)
    public Optional<Tag> getTagById(@RequestParam(required = true) Long id) {
        return tagService.getTagById(id);
    }

    @RequestMapping(name = "/gettagall", value = "/gettagall", method = RequestMethod.GET)
    public List<Tag> getTagAll() {
        return tagService.getTagAll();
    }

}
