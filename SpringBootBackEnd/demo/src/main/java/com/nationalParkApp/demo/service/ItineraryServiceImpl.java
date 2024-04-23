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
    public boolean deleteItinerary(Long id) {
        ItineraryEntity itineraryEntity = itineraryRepository.findById(id).get();
        itineraryRepository.delete(itineraryEntity);
        return true;
    }

    @Override
    public List<Itinerary> getAllItinerariesByParkCode(String parkCode) {
        List<ItineraryEntity> itineraryEntities = itineraryRepository.findByParkCode(parkCode);

        List<Itinerary> itineraries = itineraryEntities.stream().map(iti -> new Itinerary(
                        iti.getId(),
                        iti.getStartDate(),
                        iti.getEndDate(),
                        iti.getParkCode()))
                .collect(Collectors.toList());
        return itineraries;
    }

    @Override
    public List<Itinerary> getAllItinerariesByUserId(Long id) {
        List<ItineraryEntity> itineraryEntities = itineraryRepository.findByUserId(id);

        List<Itinerary> itineraries = itineraryEntities.stream().map(iti -> new Itinerary(
                        iti.getId(),
                        iti.getStartDate(),
                        iti.getEndDate(),
                        iti.getParkCode()))
                .collect(Collectors.toList());
        return itineraries;
    }
}
