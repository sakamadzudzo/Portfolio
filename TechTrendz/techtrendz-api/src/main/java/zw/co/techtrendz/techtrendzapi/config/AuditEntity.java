/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.config;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.envers.DefaultRevisionEntity;
import org.hibernate.envers.RevisionEntity;

/**
 *
 * @author smadzudzo
 */
@Entity
@RevisionEntity(AuditUserListener.class)
@Table(name = "revinfo")
@Getter
@Setter
public class AuditEntity extends DefaultRevisionEntity {

    private String username;

}