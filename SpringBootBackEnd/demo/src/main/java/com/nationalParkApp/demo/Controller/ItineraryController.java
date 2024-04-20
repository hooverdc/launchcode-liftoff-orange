package com.nationalParkApp.demo.Controller;

import com.nationalParkApp.demo.Model.Itinerary;
import com.nationalParkApp.demo.service.ItineraryService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/v1/")
public class ItineraryController {

    private ItineraryService itineraryService;

    public ItineraryController(ItineraryService itineraryService) {
        this.itineraryService = itineraryService;
    }

    @PostMapping("/itinerary")
    public Itinerary createItinerary(@RequestBody Itinerary itinerary) { return itineraryService.createItinerary(itinerary); }

    @GetMapping("/itinerary")
    public List<Itinerary> getAllItineraries() { return itineraryService.getAllItineraries(); }
}
