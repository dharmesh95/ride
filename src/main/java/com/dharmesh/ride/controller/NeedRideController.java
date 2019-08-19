package com.dharmesh.ride.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dharmesh.ride.entity.NeedRide;
import com.dharmesh.ride.service.NeedRideService;

@CrossOrigin
@RestController
@RequestMapping("/ride")
public class NeedRideController {

	@Autowired
	private NeedRideService needRideService;

	@RequestMapping("/need-ride")
	public void needRide(@RequestBody NeedRide needRideObj) {
		needRideService.needRide(needRideObj);
	}
}
