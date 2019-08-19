package com.dharmesh.ride.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dharmesh.ride.entity.Grades;
import com.dharmesh.ride.repository.GradesRepository;

@CrossOrigin
@RestController
@RequestMapping("/grades")
public class GradesController {

	@Autowired
	private GradesRepository gradesRepository;
	
	@RequestMapping("/all")
	public List<Grades> findAll() {
		System.out.println("find all");
		return gradesRepository.findAll();
	}
}
