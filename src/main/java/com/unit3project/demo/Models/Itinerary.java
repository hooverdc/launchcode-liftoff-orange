package com.unit3project.demo.Models;

import java.time.LocalDate;

public class Itinerary {//extends Park{
    //properties, getters/setters, how many itineraries can each user have?

    private LocalDate startDate;

    private LocalDate endDate;

    private Park parkToVisit;

    public Itinerary(LocalDate startDate, LocalDate endDate, Park parkToVisit) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.parkToVisit = parkToVisit;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public Park getParkToVisit() {
        return parkToVisit;
    }

    public void setParkToVisit(Park parkToVisit) {
        this.parkToVisit = parkToVisit;
    }
}
