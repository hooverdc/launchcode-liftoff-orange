package com.unit3project.demo.Models.Data;


import com.unit3project.demo.Models.Itinerary;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItineraryRepository extends CrudRepository <Itinerary, Integer> {
    //^^^ I'm not sure that should be Integer
}
