package com.example.resourcemanagement.service;

import java.util.List;
import java.util.Optional;

import com.example.resourcemanagement.dao.FanDao;
import com.example.resourcemanagement.entity.Fans;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class FansService {

    @Autowired
    private FanDao fanDao;

    public List<Fans> getFans() {
        return fanDao.findAll();
    }

    public List<Fans> searchFans(String useType, String application, String mountingLocation, String accessories,
                                 int modelYearMin, int modelYearMax,
                                 int airflowMin, int airflowMax,
                                 double powerMaxMin, double powerMaxMax,
                                 int soundMin, int soundMax,
                                 int sweepDiameterMin, int sweepDiameterMax,
                                 double heightMaxMin, double heightMaxMax,
                                 String manufacturer) {
        return fanDao.searchFans(useType, application, mountingLocation, accessories,
                modelYearMin, modelYearMax,
                airflowMin, airflowMax,
                powerMaxMin, powerMaxMax,
                soundMin, soundMax,
                sweepDiameterMin, sweepDiameterMax,
                heightMaxMin, heightMaxMax,
                manufacturer);
    }


    public Optional<Fans> getFanById(int id) {
        return fanDao.findById(id);
    }


    public Fans getFanByModel(String model) {
        return fanDao.findAllByModel(model);
    }

}
