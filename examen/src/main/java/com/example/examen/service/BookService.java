package com.example.examen.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.examen.model.Book;
import com.example.examen.repository.BookRepository;
import java.util.List;
import java.util.Optional;

@Service
public class BookService {

    @Autowired
    private BookRepository repo;

    public List<Book> getAllBooks() {
        return repo.findAll();
    }

    public Book saveBook(Book bean){
        return repo.save(bean);
    }

    public boolean deleteBook(Long id) {
        if (repo.existsById(id)) {
            repo.deleteById(id);
            return true;
        } else {
            return false;
        }
    }

    public Book updateBook(Long id, Book book) {
        Optional<Book> existingBookOptional = repo.findById(id);
        if (existingBookOptional.isPresent()) {
            Book existingBook = existingBookOptional.get();
            existingBook.setName(book.getName());
            existingBook.setAutor(book.getAutor());
            existingBook.setFecha(book.getFecha());
            return repo.save(existingBook);
        } else {
            return null;
        }
    }

    public List<Book> getBooksOrderedByFechaDesc() {
        return repo.findByOrderByFechaDesc();
    }

    public List<Book> getBooksOrderedByAutorAsc() {
        return repo.findByOrderByAutorAsc();
    }
}
