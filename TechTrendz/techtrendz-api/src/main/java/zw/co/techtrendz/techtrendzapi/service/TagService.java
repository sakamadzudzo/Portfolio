/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service;

import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;
import zw.co.techtrendz.techtrendzapi.entity.Tag;

/**
 *
 * @author smadzudzo
 */
@Service
public interface TagService {
    
    public Tag saveTag(Tag tag);

    public List<Tag> saveTags(List<Tag> tags);

    public Optional<Tag> getTagById(long id);

    public List<Tag> getTagAll();
}
