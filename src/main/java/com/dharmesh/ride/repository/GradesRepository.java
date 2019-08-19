package com.dharmesh.ride.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.dharmesh.ride.entity.Grades;

public interface GradesRepository extends MongoRepository<Grades, String> {

}
