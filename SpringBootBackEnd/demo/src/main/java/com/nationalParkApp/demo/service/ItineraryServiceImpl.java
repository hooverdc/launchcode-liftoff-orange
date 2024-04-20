package com.nationalParkApp.demo.service;


import com.nationalParkApp.demo.Repository.ItineraryRepository;
import com.nationalParkApp.demo.entity.ItineraryEntity;
import com.nationalParkApp.demo.Model.Itinerary;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

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

    @Override
    public List<Itinerary> getAllItineraries() {
        List<ItineraryEntity> itineraryEntities = itineraryRepository.findAll();

        List<Itinerary> itineraries = itineraryEntities.stream().map(iti -> new Itinerary(
                iti.getId(),
                iti.getStartDate(),
                iti.getEndDate(),
                iti.getParkCode()))
                .collect(Collectors.toList());
        return itineraries;
    }

    @Override
    public boolean deleteItinerary(Long id) {
        ItineraryEntity itineraryEntity = itineraryRepository.findById(id).get();
        itineraryRepository.delete(itineraryEntity);
        return true;
    }

    @Override
    public Itinerary updateItinerary(Long id, Itinerary itinerary) {
        ItineraryEntity itineraryEntity = itineraryRepository.findById(id).get();
        itineraryEntity.setStartDate(itinerary.getStartDate());
        itineraryEntity.setEndDate(itinerary.getEndDate());
        itineraryRepository.save(itineraryEntity);
        return itinerary;
    }
}
