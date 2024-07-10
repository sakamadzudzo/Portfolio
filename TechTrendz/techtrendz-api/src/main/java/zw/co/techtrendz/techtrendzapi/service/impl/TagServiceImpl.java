/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import zw.co.techtrendz.techtrendzapi.entity.Tag;
import zw.co.techtrendz.techtrendzapi.repository.TagDao;
import zw.co.techtrendz.techtrendzapi.service.TagService;

/**
 *
 * @author smadzudzo
 */
@Service
public class TagServiceImpl implements TagService {

    @Autowired
    private TagDao tagDao;

    public Tag saveTag(Tag tag) {
        return tagDao.save(tag);
    }

    public List<Tag> saveTags(List<Tag> tags) {
        List<Tag> savedTags = new ArrayList<>();
        tags.forEach(tag -> {
            savedTags.add(this.saveTag(tag));
        });
        return savedTags;
    }

    public Optional<Tag> getTagById(long id) {
        return tagDao.findById(id);
    }

    public List<Tag> getTagAll() {
        return tagDao.findAll();
    }

}
