// Exercise 3: Hello World RESTful Web Service

// Method: GET
// URL: /hello
// Sample Request: http://localhost:8083/hello
// Sample Response: Hello World!!

// ---- File: src/main/java/com/cognizant/springlearn/controller/HelloController.java ----

package com.cognizant.springlearn.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    private static final Logger LOGGER = LoggerFactory.getLogger(HelloController.class);

    @GetMapping("/hello")
    public String sayHello() {
        LOGGER.info("Start sayHello");
        LOGGER.info("End sayHello");
        return "Hello World!!";
    }
}

// ---- File: src/main/resources/application.properties ----
// server.port=8083
