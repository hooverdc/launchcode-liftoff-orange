package com.nationalParkApp.demo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Itinerary {
    private long id;
    private Date startDate;
    private Date endDate;
    private String parkCode;
}
