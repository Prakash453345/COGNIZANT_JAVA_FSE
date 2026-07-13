// Exercise 1: Configuring a Basic Spring Application

// ---- File: pom.xml ----
// <project xmlns="http://maven.apache.org/POM/4.0.0"
//          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
//          xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
//          http://maven.apache.org/xsd/maven-4.0.0.xsd">
//     <modelVersion>4.0.0</modelVersion>
//     <groupId>com.library</groupId>
//     <artifactId>LibraryManagement</artifactId>
//     <version>1.0-SNAPSHOT</version>
//     <packaging>jar</packaging>
//
//     <dependencies>
//         <dependency>
//             <groupId>org.springframework</groupId>
//             <artifactId>spring-context</artifactId>
//             <version>5.3.30</version>
//         </dependency>
//         <dependency>
//             <groupId>org.springframework</groupId>
//             <artifactId>spring-core</artifactId>
//             <version>5.3.30</version>
//         </dependency>
//         <dependency>
//             <groupId>org.springframework</groupId>
//             <artifactId>spring-beans</artifactId>
//             <version>5.3.30</version>
//         </dependency>
//     </dependencies>
// </project>

// ---- File: src/main/resources/applicationContext.xml ----
// <?xml version="1.0" encoding="UTF-8"?>
// <beans xmlns="http://www.springframework.org/schema/beans"
//        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
//        xsi:schemaLocation="http://www.springframework.org/schema/beans
//        http://www.springframework.org/schema/beans/spring-beans.xsd">
//
//     <bean id="bookRepository" class="com.library.repository.BookRepository"/>
//     <bean id="bookService" class="com.library.service.BookService"/>
//
// </beans>

// ---- File: src/main/java/com/library/repository/BookRepository.java ----

package com.library.repository;

public class BookRepository {

    public void displayBooks() {
        System.out.println("Displaying all books from the repository.");
    }
}

// ---- File: src/main/java/com/library/service/BookService.java ----

package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private BookRepository bookRepository;

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void manageBooks() {
        System.out.println("Managing books in BookService.");
    }
}

// ---- File: src/main/java/com/library/main/LibraryManagementApplication.java ----

package com.library.main;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import com.library.service.BookService;
import com.library.repository.BookRepository;

public class LibraryManagementApplication {

    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        BookService bookService = context.getBean("bookService", BookService.class);
        bookService.manageBooks();

        BookRepository bookRepository = context.getBean("bookRepository", BookRepository.class);
        bookRepository.displayBooks();

        System.out.println("Spring context loaded successfully.");
    }
}
