package com.globalmatrics.bike.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.globalmatrics.bike.models.Bike;

public interface BikeRepository extends JpaRepository<Bike, Long> {

}
