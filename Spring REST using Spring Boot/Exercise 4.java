// Exercise 4: REST - Country Web Service

// URL: /country
// Sample Request: http://localhost:8083/country
// Sample Response: { "code": "IN", "name": "India" }

// ---- File: src/main/java/com/cognizant/springlearn/controller/CountryController.java ----

package com.cognizant.springlearn.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.springlearn.Country;

@RestController
public class CountryController {

    private static final Logger LOGGER = LoggerFactory.getLogger(CountryController.class);

    @RequestMapping("/country")
    public Country getCountryIndia() {
        LOGGER.info("Start getCountryIndia");
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        Country country = context.getBean("countryIN", Country.class);
        LOGGER.debug("Country : {}", country);
        LOGGER.info("End getCountryIndia");
        return country;
    }
}

// Spring automatically converts the Country object to JSON using Jackson
// The response Content-Type header will be application/json
