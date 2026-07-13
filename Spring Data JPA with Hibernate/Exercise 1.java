// Exercise 1: Spring Data JPA - Quick Example

// ---- SQL Setup (run in MySQL) ----
// create schema ormlearn;
// use ormlearn;
// create table country(co_code varchar(2) primary key, co_name varchar(50));
// insert into country values ('IN', 'India');
// insert into country values ('US', 'United States of America');

// ---- File: src/main/resources/application.properties ----
// # Spring and application log
// logging.level.org.springframework=info
// logging.level.com.cognizant=debug
//
// # Hibernate logs
// logging.level.org.hibernate.SQL=trace
// logging.level.org.hibernate.type.descriptor.sql=trace
//
// # Log pattern
// logging.pattern.console=%d{dd-MM-yy} %d{HH:mm:ss.SSS} %-20.20thread %5p %-25.25logger{25} %25M %4L %m%n
//
// # Database configuration
// spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
// spring.datasource.url=jdbc:mysql://localhost:3306/ormlearn
// spring.datasource.username=root
// spring.datasource.password=root
//
// # Hibernate configuration
// spring.jpa.hibernate.ddl-auto=validate
// spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL5Dialect

// ---- File: src/main/java/com/cognizant/ormlearn/model/Country.java ----

package com.cognizant.ormlearn.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "country")
public class Country {

    @Id
    @Column(name = "co_code")
    private String code;

    @Column(name = "co_name")
    private String name;

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Country [code=" + code + ", name=" + name + "]";
    }
}

// ---- File: src/main/java/com/cognizant/ormlearn/repository/CountryRepository.java ----

package com.cognizant.ormlearn.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cognizant.ormlearn.model.Country;

@Repository
public interface CountryRepository extends JpaRepository<Country, String> {

}

// ---- File: src/main/java/com/cognizant/ormlearn/service/CountryService.java ----

package com.cognizant.ormlearn.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.repository.CountryRepository;

@Service
public class CountryService {

    @Autowired
    private CountryRepository countryRepository;

    @Transactional
    public List<Country> getAllCountries() {
        return countryRepository.findAll();
    }
}

// ---- File: src/main/java/com/cognizant/ormlearn/OrmLearnApplication.java ----

package com.cognizant.ormlearn;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.service.CountryService;

@SpringBootApplication
public class OrmLearnApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(OrmLearnApplication.class);

    private static CountryService countryService;

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(OrmLearnApplication.class, args);
        countryService = context.getBean(CountryService.class);
        LOGGER.info("Inside main");

        testGetAllCountries();
    }

    private static void testGetAllCountries() {
        LOGGER.info("Start");
        List<Country> countries = countryService.getAllCountries();
        LOGGER.debug("countries={}", countries);
        LOGGER.info("End");
    }
}
