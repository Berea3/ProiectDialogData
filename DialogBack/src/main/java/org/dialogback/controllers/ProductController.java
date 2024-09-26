package org.dialogback.controllers;

import org.dialogback.entities.Product;
import org.dialogback.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    ProductRepository productRepository;

    // CREATE

    // READ
    @GetMapping(path="/getAll")
    public List<Product> getAll()
    {
        return productRepository.findAll();
    }

    @GetMapping(path="/getById/{id}")
    public Product getById(@PathVariable String id)
    {
        return productRepository.findById(id).get();
    }

    // UPDATE

    // DELETE
}
