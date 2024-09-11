/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import zw.co.techtrendz.techtrendzapi.entity.MediaFile;

/**
 *
 * @author smadzudzo
 */
public interface MediaFileDao extends JpaRepository<MediaFile, Long> {
}
