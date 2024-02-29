package com.example.examen.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.examen.model.Book;
import java.util.List;

public interface BookRepository extends JpaRepository<Book, Long>{
    List<Book> findByOrderByAutorAsc();
    List<Book> findByOrderByFechaDesc();
}
