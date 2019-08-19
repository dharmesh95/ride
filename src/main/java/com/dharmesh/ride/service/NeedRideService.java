package com.dharmesh.ride.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dharmesh.ride.entity.NeedRide;
import com.dharmesh.ride.repository.NeedRideRepository;

@Service
public class NeedRideService {

	@Autowired
	private NeedRideRepository needRideRepository;

	public void needRide(NeedRide needRideObj) {
		needRideRepository.save(needRideObj);
	}
}
