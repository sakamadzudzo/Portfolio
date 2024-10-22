/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.entity;

import com.fasterxml.jackson.annotation.JsonView;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Transient;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.hibernate.envers.Audited;
import zw.co.techtrendz.techtrendzapi.views.View;

/**
 *
 * @author smadzudzo
 */
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Audited
public class MediaFile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String originalName;

    @Column(nullable = false)
    private String hashName;

    @Column(nullable = false)
    private String filePath;

    @Column(nullable = false)
    private String fileType;

    @ManyToMany(mappedBy = "pictures")
    @JsonView({View.MediaFileCheckForeignKeys.class})
    @ToString.Exclude
    private List<Product> products;

    @OneToOne(mappedBy = "profilePic")
    @JsonView({View.MediaFileCheckForeignKeys.class})
    @ToString.Exclude
    private Users user;

    @Transient
    private boolean saved = true;

    @Transient
    private String error;

    public MediaFile(long id) {
        this.id = id;
    }
}
