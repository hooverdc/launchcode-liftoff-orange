package com.nationalParkApp.demo.service;

import com.nationalParkApp.demo.Model.Itinerary;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ItineraryService {

    Itinerary createItinerary(Itinerary itinerary);

    boolean deleteItinerary(Long id);

    List<Itinerary> getAllItinerariesByParkCode(String parkCode);

    List<Itinerary> getAllItinerariesByUserId(Long id);
}
