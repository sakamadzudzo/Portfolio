/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.security;

import java.util.Arrays;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.HeadersConfigurer.FrameOptionsConfig;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;

/**
 *
 * @author smadzudzo
 */
@Configuration
@EnableWebSecurity
@ComponentScan("zw.co.techtrendz.techtrendzapi")
public class SecurityConfig {
    
    @Autowired
    private CustomAuthenticationProvider authProvider;
    
    @Bean
    public AuthenticationManager authManager(HttpSecurity http) throws Exception {
        AuthenticationManagerBuilder authenticationManagerBuilder
                = http.getSharedObject(AuthenticationManagerBuilder.class);
        authenticationManagerBuilder.authenticationProvider(authProvider);
        return authenticationManagerBuilder.build();
    }
    
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http.csrf().disable().authorizeHttpRequests(request -> request
                .requestMatchers("/testtobemade", "/resources/**", "/images/**", "/*.css", "/webjars/**").permitAll()
                .anyRequest()
                .authenticated())
//                .formLogin((form) -> form
//                //                .loginPage("/loginform")
//                .permitAll()
//                )
                .logout((logout) -> logout.permitAll())
                .httpBasic(Customizer.withDefaults())
                .headers(headers -> headers.frameOptions(FrameOptionsConfig::disable))
                .cors(cors -> cors.configurationSource(request -> {
            CorsConfiguration configuration = new CorsConfiguration();
            configuration.setAllowedOrigins(Arrays.asList("*"));
            configuration.setAllowedMethods(Arrays.asList("*"));
            configuration.setAllowedHeaders(Arrays.asList("*"));
            return configuration;
        }))
                .build();
    }

//    @Bean
//    WebSecurityCustomizer configureWebSecurity() {
//        return (web) -> web.ignoring().requestMatchers("/getfiscalised", "/printlintfiscaltaxinvoiceexport", "/fiscalised", "/printinvoice", "/resources/**", "/images/**", "/js/**", "/css/**", "/webjars/**");
//    }
}
