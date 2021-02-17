package com.example.resourcemanagement.dao;

import com.example.resourcemanagement.entity.Fans;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;



public interface FanDao extends JpaRepository<Fans, Integer> {
    public Fans findAllByModel(String model);

    @Query("select f from Fans f where f.useType = ?1 and f.application = ?2 and f.mountingLocation = ?3 " +
            "and f.accessories = ?4 " +
            "and (f.modelYear between ?5 and ?6) " +
            "and (f.airflow between ?7 and ?8) " +
            "and (f.powerMax between ?9 and ?10) " +
            "and (f.sound between ?11 and ?12) " +
            "and (f.sweepDiameter between ?13 and ?14) " +
            "and (f.heightMax between ?15 and ?16) " +
            "and f.manufacturer = ?17"
          )
    List<Fans> searchFans(String useType, String application, String mountingLocation, String accessories,
                          int modelYearMin, int modelYearMax,
                          int airflowMin, int airflowMax,
                          double powerMaxMin, double powerMaxMax,
                          int soundMin, int soundMax,
                          int sweepDiameterMin, int sweepDiameterMax,
                          double heightMaxMin, double heightMaxMax,
                          String manufacturer);

}
