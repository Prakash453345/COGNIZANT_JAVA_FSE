// Exercise 2: Spring Core - Load Country from Spring Configuration XML

// ---- File: src/main/resources/country.xml ----
// <?xml version="1.0" encoding="UTF-8"?>
// <beans xmlns="http://www.springframework.org/schema/beans"
//        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
//        xsi:schemaLocation="http://www.springframework.org/schema/beans
//        http://www.springframework.org/schema/beans/spring-beans.xsd">
//
//     <bean id="countryIN" class="com.cognizant.springlearn.Country">
//         <property name="code" value="IN" />
//         <property name="name" value="India" />
//     </bean>
//
//     <bean id="countryUS" class="com.cognizant.springlearn.Country">
//         <property name="code" value="US" />
//         <property name="name" value="United States" />
//     </bean>
//
//     <bean id="countryDE" class="com.cognizant.springlearn.Country">
//         <property name="code" value="DE" />
//         <property name="name" value="Germany" />
//     </bean>
//
//     <bean id="countryJP" class="com.cognizant.springlearn.Country">
//         <property name="code" value="JP" />
//         <property name="name" value="Japan" />
//     </bean>
//
// </beans>

// ---- File: src/main/java/com/cognizant/springlearn/Country.java ----

package com.cognizant.springlearn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Country {

    private static final Logger LOGGER = LoggerFactory.getLogger(Country.class);

    private String code;
    private String name;

    public Country() {
        LOGGER.debug("Inside Country Constructor.");
    }

    public String getCode() {
        LOGGER.debug("Inside getCode()");
        return code;
    }

    public void setCode(String code) {
        LOGGER.debug("Inside setCode()");
        this.code = code;
    }

    public String getName() {
        LOGGER.debug("Inside getName()");
        return name;
    }

    public void setName(String name) {
        LOGGER.debug("Inside setName()");
        this.name = name;
    }

    @Override
    public String toString() {
        return "Country [code=" + code + ", name=" + name + "]";
    }
}

// ---- Updated File: SpringLearnApplication.java (add displayCountry method) ----

package com.cognizant.springlearn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@SpringBootApplication
public class SpringLearnApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication.class);

    public static void main(String[] args) {
        SpringApplication.run(SpringLearnApplication.class, args);
        LOGGER.info("Inside main");

        displayCountry();
    }

    private static void displayCountry() {
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        Country country = context.getBean("countryIN", Country.class);
        LOGGER.debug("Country : {}", country.toString());
    }
}
