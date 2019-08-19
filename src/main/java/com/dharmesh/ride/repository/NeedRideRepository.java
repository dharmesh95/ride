package com.dharmesh.ride.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.dharmesh.ride.entity.NeedRide;

public interface NeedRideRepository extends MongoRepository<NeedRide, String> {

}
