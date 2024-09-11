/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service;

import java.io.IOException;
import java.security.NoSuchAlgorithmException;
import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import zw.co.techtrendz.techtrendzapi.entity.MediaFile;

/**
 *
 * @author smadzudzo
 */
@Service
public interface MediaFileService {

    public MediaFile saveFile(MultipartFile file) throws IOException, NoSuchAlgorithmException;

    public List<MediaFile> saveFiles(MultipartFile[] files) throws IOException, NoSuchAlgorithmException;
}
