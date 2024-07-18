///*
// * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
// * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
// */
//package zw.co.techtrendz.techtrendzapi.config;
//
//import com.fasterxml.jackson.databind.ObjectMapper;
//import com.fasterxml.jackson.datatype.hibernate5.Hibernate5Module;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//
///**
// *
// * @author smadzudzo
// */
//@Configuration
//public class JacksonConfig {
//    @Bean
//    public Hibernate5Module hibernate5Module() {
//        return new Hibernate5Module();
//    }
//    
//    @Bean
//    public ObjectMapper objectMapper() {
//        ObjectMapper objectMapper = new ObjectMapper();
//        objectMapper.registerModule(new Hibernate5Module());
//        objectMapper.findAndRegisterModules();
//        return objectMapper;
//    }
//}
