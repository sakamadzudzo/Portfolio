/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service;

import java.io.IOException;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import org.springframework.http.ResponseEntity;
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

    public Optional<MediaFile> getMediaFileById(long id);

    public ResponseEntity<Object> getFileByMediaFileId(long id);

    public void removeMediafile(long mediaFileId, long productId);
    
    public void removeProfilePicture(long mediaFileId, long userId);
}
