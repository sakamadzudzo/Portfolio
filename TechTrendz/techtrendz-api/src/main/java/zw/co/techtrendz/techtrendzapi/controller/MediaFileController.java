/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import zw.co.techtrendz.techtrendzapi.entity.MediaFile;
import zw.co.techtrendz.techtrendzapi.service.MediaFileService;

/**
 *
 * @author smadzudzo
 */
@RestController
public class MediaFileController {

    @Autowired
    private MediaFileService mediaFileService;

    @RequestMapping(name = "/upload", value = "/upload", method = RequestMethod.POST)
    public ResponseEntity<?> uploadFiles(@RequestParam("files") MultipartFile[] files) {
        List<MediaFile> savedFiles = new ArrayList<>();
        for (MultipartFile file : files) {
            try {
                MediaFile mediaFile = mediaFileService.saveFile(file);
                savedFiles.add(mediaFile);
            } catch (Exception e) {
                Logger.getLogger(MediaFileController.class.getName()).log(Level.SEVERE, null, e);
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                        .body("Failed to save file: " + file.getOriginalFilename());
            }
        }
        return ResponseEntity.ok(savedFiles);
    }

    @RequestMapping(name = "/getmediafilebyid", value = "/getmediafilebyid", method = RequestMethod.GET)
    public Optional<MediaFile> getMediaFileById(@RequestParam long id) {
        return mediaFileService.getMediaFileById(id);
    }

    @RequestMapping(name = "/getfilebymediafileid", value = "/getfilebymediafileid", method = RequestMethod.GET)
    public ResponseEntity<Object> getFileByMediaFileId(@RequestParam long id) {
        return mediaFileService.getFileByMediaFileId(id);
    }

    @RequestMapping(name = "/removemediafile", value = "/removemediafile", method = RequestMethod.POST)
    public void removeMediafile(@RequestParam long mediaFileId, @RequestParam long productId) {
        mediaFileService.removeMediafile(mediaFileId, productId);
    }
}
