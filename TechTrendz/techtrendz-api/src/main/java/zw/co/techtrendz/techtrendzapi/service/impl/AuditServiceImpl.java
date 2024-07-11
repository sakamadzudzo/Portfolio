/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service.impl;

import java.util.List;
import org.hibernate.envers.AuditReader;
import org.hibernate.envers.query.AuditQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import zw.co.techtrendz.techtrendzapi.entity.Brand;
import zw.co.techtrendz.techtrendzapi.service.AuditService;

/**
 *
 * @author smadzudzo
 */
@Service
public class AuditServiceImpl implements AuditService {

    @Autowired
    private AuditReader auditReader;

    public List<Brand> getBrandHistory(int revision) {
        AuditQuery query = auditReader.createQuery().forEntitiesAtRevision(Brand.class, 2);
        return query.getResultList();
    }

}
