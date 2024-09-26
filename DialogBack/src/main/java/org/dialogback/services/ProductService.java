package org.dialogback.services;

import org.dialogback.entities.Product;
import org.dialogback.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;

    public List<Product> getAll()
    {
        return productRepository.findAll().stream().map(product -> new Product(product.getBrand(), product.getModel(), product.getPrice(), product.getInStock(), product.getWeight())).toList();
    }
}
