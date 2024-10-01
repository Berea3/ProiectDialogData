package org.dialogback.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Product {

    @Id
    private String id;  // detail

    private String brand;
    private String model;

    private String cpu;  // detail
    private String gpu;  // detail
    private String ram;  // detail

    private int price;

    private String details;  // detail

    private boolean inStock;

    private Double weight;

    public Product() {
    }

    public Product(String brand, String model, int price, boolean inStock, Double weight) {
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.inStock = inStock;
        this.weight = weight;
    }

    public Product(String id, String brand, String model, String cpu, String gpu, String ram, int price, String details, boolean inStock, Double weight) {
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.cpu = cpu;
        this.gpu = gpu;
        this.ram = ram;
        this.price = price;
        this.details = details;
        this.inStock = inStock;
        this.weight = weight;
    }

    public String getId() {return id;}
    public String getBrand() {return brand;}
    public String getModel() {return model;}
    public String getCpu() {return cpu;}
    public String getGpu() {return gpu;}
    public String getRam() {return ram;}
    public int getPrice() {return price;}
    public String getDetails() {return details;}
    public boolean getInStock() {return inStock;}
    public Double getWeight() {return weight;}

    public void setId(String id) {this.id = id;}
    public void setBrand(String brand) {this.brand = brand;}
    public void setModel(String model) {this.model = model;}
    public void setCpu(String cpu) {this.cpu = cpu;}
    public void setGpu(String gpu) {this.gpu = gpu;}
    public void setRam(String ram) {this.ram = ram;}
    public void setPrice(int price) {this.price = price;}
    public void setDetails(String details) {this.details = details;}
    public void setInStock(boolean inStock) {this.inStock = inStock;}
    public void setWeight(Double weight) {this.weight = weight;}
}
