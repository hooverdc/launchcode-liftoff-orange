package com.unit3project.demo.Models;

public class Fee {

    private String title;

    private String description;
    private int cost;

    public Fee(String title, String description, int cost) {
        this.title = title;
        this.description = description;
        this.cost = cost;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getCost() {
        return cost;
    }

    public void setCost(int cost) {
        this.cost = cost;
    }
}
