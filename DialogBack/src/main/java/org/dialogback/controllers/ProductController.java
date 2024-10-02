package org.dialogback.controllers;

import org.dialogback.email.Email;
import org.dialogback.entities.Generator;
import org.dialogback.entities.Product;
import org.dialogback.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    ProductRepository productRepository;

    @Autowired
    Email email;

    // CREATE
    @PostMapping(path="/create")
    public void create(@RequestBody Product product)
    {
        System.out.println("creating...");
        product.setId(Generator.generateId());
        productRepository.save(product);
    }

    @PostMapping(path="/checkout")
    public void checkout(@RequestParam String name,@RequestParam String email, @RequestParam String products)
    {
        System.out.println(products);
        this.email.send(email,"Confirmation","Products will be delivered"+products);
    }

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
