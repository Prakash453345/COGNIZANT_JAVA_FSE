// Exercise 5: REST - Get Country Based on Country Code

// URL: /countries/{code}
// Sample Request: http://localhost:8083/countries/in
// Sample Response: { "code": "IN", "name": "India" }

// ---- File: src/main/java/com/cognizant/springlearn/service/CountryService.java ----

package com.cognizant.springlearn.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

import com.cognizant.springlearn.Country;

@Service
public class CountryService {

    private static final Logger LOGGER = LoggerFactory.getLogger(CountryService.class);

    public Country getCountry(String code) {
        LOGGER.info("Start getCountry");
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");

        // Get all country beans and find matching code (case insensitive)
        List<String> beanIds = List.of("countryIN", "countryUS", "countryDE", "countryJP");

        Country result = beanIds.stream()
                .map(id -> context.getBean(id, Country.class))
                .filter(c -> c.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElse(null);

        LOGGER.debug("Country found: {}", result);
        LOGGER.info("End getCountry");
        return result;
    }
}

// ---- Updated File: CountryController.java (add getCountry endpoint) ----

package com.cognizant.springlearn.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.springlearn.Country;
import com.cognizant.springlearn.service.CountryService;

@RestController
public class CountryController {

    private static final Logger LOGGER = LoggerFactory.getLogger(CountryController.class);

    @Autowired
    private CountryService countryService;

    @RequestMapping("/country")
    public Country getCountryIndia() {
        LOGGER.info("Start getCountryIndia");
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        Country country = context.getBean("countryIN", Country.class);
        LOGGER.info("End getCountryIndia");
        return country;
    }

    @GetMapping("/countries/{code}")
    public Country getCountry(@PathVariable String code) {
        LOGGER.info("Start getCountry");
        Country country = countryService.getCountry(code);
        LOGGER.info("End getCountry");
        return country;
    }
}
