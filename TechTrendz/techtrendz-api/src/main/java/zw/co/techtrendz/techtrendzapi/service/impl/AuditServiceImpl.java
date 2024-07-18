/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service.impl;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.hibernate5.Hibernate5Module;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import java.util.List;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.hibernate.envers.AuditReader;
import org.hibernate.envers.AuditReaderFactory;
import org.hibernate.envers.query.AuditQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import zw.co.techtrendz.techtrendzapi.config.AuditEntity;
import zw.co.techtrendz.techtrendzapi.entity.Brand;
import zw.co.techtrendz.techtrendzapi.service.AuditService;

/**
 *
 * @author smadzudzo
 */
@Service
public class AuditServiceImpl implements AuditService {

    @PersistenceContext
    private EntityManager entityManager;

    private AuditReader getAuditReader() {
        return AuditReaderFactory.get(entityManager);
    }

    public String getBrandHistory(int revision) {
        final AuditReader auditReader = getAuditReader();
//        AuditQuery query = auditReader.createQuery().forRevisionsOfEntityWithChanges(Brand.class, true);
//        AuditQuery query = auditReader.createQuery().forEntitiesModifiedAtRevision(Brand.class, revision);
        AuditQuery query = auditReader.createQuery().forRevisionsOfEntity(Brand.class, true);

        ObjectMapper mapper = new ObjectMapper();
        mapper.findAndRegisterModules();
//        mapper.registerModule(new Hibernate5Module());

        String result = "";
//        try {
//            result = mapper.writeValueAsString(query.getResultList());
//        } catch (JsonProcessingException ex) {
//            Logger.getLogger(AuditServiceImpl.class.getName()).log(Level.SEVERE, null, ex);
//        }
        var l = (AuditEntity)query.getResultList();
        result = query.getResultList().toString();
        return l.toString();
    }

}
