/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service.impl;

import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Base64;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.data.domain.Example;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;
import zw.co.techtrendz.techtrendzapi.entity.MediaFile;
import zw.co.techtrendz.techtrendzapi.repository.MediaFileDao;
import zw.co.techtrendz.techtrendzapi.service.MediaFileService;

/**
 *
 * @author smadzudzo
 */
@Service
public class MediaFileServiceImpl implements MediaFileService {

    @Value("${file.upload-dir}") // Define this in application.properties
    private String uploadDir;

    @Autowired
    private MediaFileDao mediaFileDao;

    public MediaFile saveFile(MultipartFile file) throws IOException, NoSuchAlgorithmException {
        String type = "misc";
        // Resolve path relative to the current working directory and ensure directory exists
        if (file != null && file.getContentType() != null && file.getContentType().contains("image")) {
            type = "img";
        }
        if (file != null && file.getContentType() != null && file.getContentType().contains("video")) {
            type = "vid";
        }
        Path dir = Paths.get(System.getProperty("user.dir"), uploadDir, type);
        if (!Files.exists(dir)) {
            Files.createDirectories(dir); // Create directory if it doesn't exist
        }

        // Step 1: Get the original file name
        String originalName = file.getOriginalFilename();

        // Step 2: Compute hash for the file content
        String fileHash = computeFileHash(file);

        // Step 3: Get the file extension
        String extension = getFileExtension(originalName);

        // Step 4: Construct new filename with hash + extension
        String newFileName = fileHash + "_" + System.currentTimeMillis() + "." + extension;

        // Step 5: Create file path
        Path path = Paths.get(dir.toString(), newFileName);
        String filePath = path.toString();
        Files.createDirectories(path);

        // Step 6: Save the file on disk
        File dest = new File(filePath);
        dest.mkdirs();
        file.transferTo(dest);

        // Step 7: Save file info in DB
        MediaFile mediaFile = new MediaFile();
        mediaFile.setOriginalName(originalName);
        mediaFile.setHashName(newFileName);
        mediaFile.setFilePath(filePath);
        mediaFile.setFileType(file.getContentType());

        return mediaFileDao.save(mediaFile);
    }

    // Utility method to compute file hash
    private String computeFileHash(MultipartFile file) throws NoSuchAlgorithmException, IOException {
        MessageDigest digest = MessageDigest.getInstance("SHA-256");
        byte[] hash = digest.digest(file.getBytes());
        StringBuilder hexString = new StringBuilder();
        for (byte b : hash) {
            String hex = Integer.toHexString(0xff & b);
            if (hex.length() == 1) {
                hexString.append('0');
            }
            hexString.append(hex);
        }
        return hexString.toString();
    }

    // Utility method to get file extension
    private String getFileExtension(String fileName) {
        int dotIndex = fileName.lastIndexOf(".");
        return (dotIndex == -1) ? "" : fileName.substring(dotIndex + 1);
    }

    public List<MediaFile> saveFiles(MultipartFile[] files) throws IOException, NoSuchAlgorithmException {
        List<MediaFile> savedFiles = new ArrayList<>();
//        for (MultipartFile file : files) {
//            MediaFile mediaFile = this.saveFile(file);
//            savedFiles.add(mediaFile);
//        }
        Arrays.stream(files).forEach(file -> {
            try {
                MediaFile mediaFile = this.saveFile(file);
                savedFiles.add(mediaFile);
            } catch (IOException ex) {
                Logger.getLogger(MediaFileServiceImpl.class.getName()).log(Level.SEVERE, null, ex);
                MediaFile mediaFile = new MediaFile();
                String originalName = file.getOriginalFilename();
                mediaFile.setOriginalName(originalName);
                mediaFile.setHashName("");
                mediaFile.setFilePath("");
                mediaFile.setFileType(file.getContentType());
                mediaFile.setSaved(false);
                mediaFile.setError(ex.getMessage());
                savedFiles.add(mediaFile);
            } catch (NoSuchAlgorithmException ex) {
                Logger.getLogger(MediaFileServiceImpl.class.getName()).log(Level.SEVERE, null, ex);
                MediaFile mediaFile = new MediaFile();
                String originalName = file.getOriginalFilename();
                mediaFile.setOriginalName(originalName);
                mediaFile.setHashName("");
                mediaFile.setFilePath("");
                mediaFile.setFileType(file.getContentType());
                mediaFile.setSaved(false);
                mediaFile.setError(ex.getMessage());
                savedFiles.add(mediaFile);
            }
        });
        return savedFiles;
    }

    public Optional<MediaFile> getMediaFileById(long id) {
        MediaFile mediaFile = new MediaFile(id);
        Example mediaFileExample = Example.of(mediaFile);
        return mediaFileDao.findOne(mediaFileExample);
    }

    public ResponseEntity<Object> getFileByMediaFileId(long id) {
//        try {
//            List<byte[]> files = new ArrayList<>();
//            MediaFile newMediaFile = new MediaFile(id);
//            Example mediaFileExample = Example.of(newMediaFile);
//            MediaFile mediaFile = (MediaFile) mediaFileDao.findOne(mediaFileExample).get();
//            File file = new File(mediaFile.getFilePath());
//            byte[] fileContent = Files.readAllBytes(file.toPath());
//            return fileContent;
//        } catch (IOException ex) {
////            return null;
//            throw new RuntimeException("Failed to fetch media", ex);
//        }

        try {
            // Step 1: Locate the file on the disk
            MediaFile newMediaFile = new MediaFile(id);
            Example mediaFileExample = Example.of(newMediaFile);
            MediaFile mediaFile = (MediaFile) mediaFileDao.findOne(mediaFileExample).get();
            Path filePath = Paths.get(mediaFile.getFilePath());
            Resource resource = new UrlResource(filePath.toUri());

            if (!resource.exists()) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(null);
            }

            // Step 2: Set content type based on the file type
            String contentType = Files.probeContentType(filePath);

            // Step 3: Return the file with appropriate headers
            return ResponseEntity.ok()
                    .contentType(org.springframework.http.MediaType.parseMediaType(contentType))
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
                    .body(resource);

        } catch (MalformedURLException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(null);
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(null);
        }
    }
}
