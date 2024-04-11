package com.nationalParkApp.demo.service;

import com.nationalParkApp.demo.model.Itinerary;
import org.springframework.stereotype.Service;

@Service
public interface ItineraryService {

    Itinerary createItinerary(Itinerary itinerary);
}
