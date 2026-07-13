// Exercise 6: Create Authentication Service that Returns JWT

// Request:  curl -s -u user:pwd http://localhost:8090/authenticate
// Response: {"token":"eyJhbGciOiJIUzI1NiJ9..."}

// ---- File: pom.xml (add JWT dependency) ----
// <dependency>
//     <groupId>io.jsonwebtoken</groupId>
//     <artifactId>jjwt</artifactId>
//     <version>0.9.1</version>
// </dependency>
// <dependency>
//     <groupId>org.springframework.boot</groupId>
//     <artifactId>spring-boot-starter-security</artifactId>
// </dependency>

// ---- File: src/main/java/com/cognizant/springlearn/util/JwtUtil.java ----

package com.cognizant.springlearn.util;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Component;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Component
public class JwtUtil {

    private String secretKey = "secret";

    public String generateToken(String username) {
        Map<String, Object> claims = new HashMap<>();
        return createToken(claims, username);
    }

    private String createToken(Map<String, Object> claims, String subject) {
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(subject)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 20)) // 20 minutes
                .signWith(SignatureAlgorithm.HS256, secretKey)
                .compact();
    }
}

// ---- File: src/main/java/com/cognizant/springlearn/controller/AuthenticationController.java ----

package com.cognizant.springlearn.controller;

import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.springlearn.util.JwtUtil;

@RestController
public class AuthenticationController {

    private static final Logger LOGGER = LoggerFactory.getLogger(AuthenticationController.class);

    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping("/authenticate")
    public Map<String, String> authenticate(@RequestHeader("Authorization") String authHeader) {
        LOGGER.info("Start authenticate");

        // Decode Basic Auth header (format: "Basic base64(user:pwd)")
        String base64Credentials = authHeader.substring("Basic ".length());
        String credentials = new String(Base64.getDecoder().decode(base64Credentials));
        String[] parts = credentials.split(":", 2);
        String username = parts[0];

        // Generate JWT token
        String token = jwtUtil.generateToken(username);

        Map<String, String> response = new HashMap<>();
        response.put("token", token);

        LOGGER.info("End authenticate");
        return response;
    }
}

// ---- File: src/main/java/com/cognizant/springlearn/config/SecurityConfig.java ----

package com.cognizant.springlearn.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf().disable()
            .authorizeRequests()
            .antMatchers("/authenticate").authenticated()
            .anyRequest().permitAll()
            .and()
            .httpBasic();
        return http.build();
    }
}

// application.properties: server.port=8090
