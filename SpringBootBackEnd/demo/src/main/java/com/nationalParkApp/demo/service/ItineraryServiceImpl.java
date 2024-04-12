package com.nationalParkApp.demo.service;


import com.nationalParkApp.demo.Repository.ItineraryRepository;
import com.nationalParkApp.demo.entity.ItineraryEntity;
import com.nationalParkApp.demo.Model.Itinerary;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

@Component
public class ItineraryServiceImpl implements ItineraryService {

    private ItineraryRepository itineraryRepository;

    public ItineraryServiceImpl(ItineraryRepository itineraryRepository) {this.itineraryRepository = itineraryRepository;}

    @Override
    public Itinerary createItinerary(Itinerary itinerary) {
        ItineraryEntity itineraryEntity = new ItineraryEntity();

        BeanUtils.copyProperties(itinerary, itineraryEntity);
        itineraryRepository.save(itineraryEntity);
        return itinerary;
    }
}
