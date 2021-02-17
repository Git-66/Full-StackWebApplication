package com.example.resourcemanagement.controller;

import java.util.List;


import com.example.resourcemanagement.entity.Fans;
import com.example.resourcemanagement.service.FansService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;



@RestController
@RequestMapping("/fans")
public class FansController {

    private static final Logger LOG = LoggerFactory.getLogger(FansController.class);

    @Autowired
    private FansService fanService;


    @CrossOrigin(origins = "http://localhost:3000")
    @ResponseBody
    @GetMapping("/list")
    public List<Fans> listFans() {
        return fanService.getFans();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @ResponseBody
    @GetMapping("/search")
    public List<Fans> searchFans(@RequestParam(name = "useType") String useType,
                                 @RequestParam(name = "application") String application,
                                 @RequestParam(name = "mountLocation") String mountingLocation,
                                 @RequestParam(name = "accessories") String accessories,
                                 @RequestParam(name = "modelYearMin") Integer modelYearMin, @RequestParam(name = "modelYearMax") Integer modelYearMax,
                                 @RequestParam(name = "airflowMin") Integer airflowMin, @RequestParam(name = "airflowMax") Integer airflowMax,
                                 @RequestParam(name = "powerMaxMin") Double powerMaxMin, @RequestParam(name = "powerMaxMax") Double powerMaxMax,
                                 @RequestParam(name = "soundMin") Integer soundMin, @RequestParam(name = "soundMax") Integer soundMax,
                                 @RequestParam(name = "sweepDiameterMin") Integer sweepDiameterMin, @RequestParam(name = "sweepDiameterMax") Integer sweepDiameterMax,
                                 @RequestParam(name = "heightMaxMin") Double heightMaxMin, @RequestParam(name = "heightMaxMax") Double heightMaxMax,
                                 @RequestParam(name = "manufacturer") String manufacturer) {
        return fanService.searchFans(useType, application, mountingLocation, accessories,
                modelYearMin, modelYearMax,
                airflowMin, airflowMax,
                powerMaxMin, powerMaxMax,
                soundMin, soundMax,
                sweepDiameterMin, sweepDiameterMax,
                heightMaxMin, heightMaxMax,
                manufacturer);
    }
}



