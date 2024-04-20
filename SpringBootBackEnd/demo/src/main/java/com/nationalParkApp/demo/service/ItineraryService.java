package com.nationalParkApp.demo.service;

import com.nationalParkApp.demo.Model.Itinerary;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ItineraryService {

    Itinerary createItinerary(Itinerary itinerary);

    List<Itinerary> getAllItineraries();

    boolean deleteItinerary(Long id);

    Itinerary updateItinerary(Long id, Itinerary itinerary);
}
