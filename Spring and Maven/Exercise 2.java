// Exercise 2: Implementing Dependency Injection

// ---- Updated File: src/main/resources/applicationContext.xml ----
// <?xml version="1.0" encoding="UTF-8"?>
// <beans xmlns="http://www.springframework.org/schema/beans"
//        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
//        xsi:schemaLocation="http://www.springframework.org/schema/beans
//        http://www.springframework.org/schema/beans/spring-beans.xsd">
//
//     <bean id="bookRepository" class="com.library.repository.BookRepository"/>
//
//     <!-- Wiring BookRepository into BookService using setter injection -->
//     <bean id="bookService" class="com.library.service.BookService">
//         <property name="bookRepository" ref="bookRepository"/>
//     </bean>
//
// </beans>

// ---- File: src/main/java/com/library/repository/BookRepository.java ----

package com.library.repository;

public class BookRepository {

    public void displayBooks() {
        System.out.println("Displaying all books from the repository.");
    }

    public void addBook(String title) {
        System.out.println("Book added: " + title);
    }
}

// ---- Updated File: src/main/java/com/library/service/BookService.java ----

package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private BookRepository bookRepository;

    // Setter method for dependency injection
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public BookRepository getBookRepository() {
        return bookRepository;
    }

    public void manageBooks() {
        System.out.println("Managing books in BookService.");
        bookRepository.displayBooks();
    }

    public void addBook(String title) {
        bookRepository.addBook(title);
    }
}

// ---- File: src/main/java/com/library/main/LibraryManagementApplication.java ----

package com.library.main;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import com.library.service.BookService;

public class LibraryManagementApplication {

    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        // BookRepository is injected into BookService via setter injection
        BookService bookService = context.getBean("bookService", BookService.class);

        bookService.manageBooks();
        bookService.addBook("Spring in Action");

        System.out.println("Dependency Injection verified successfully.");
    }
}
