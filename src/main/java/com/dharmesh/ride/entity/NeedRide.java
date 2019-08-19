package com.dharmesh.ride.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "need_ride")
public class NeedRide {

	@Id
	private String id;

	@Field("src_lat")
	private String srcLat;

	@Field("src_long")
	private String srcLong;

	@Field("no_of_seats")
	private int noOfSeats;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getSrcLat() {
		return srcLat;
	}

	public void setSrcLat(String srcLat) {
		this.srcLat = srcLat;
	}

	public String getSrcLong() {
		return srcLong;
	}

	public void setSrcLong(String srcLong) {
		this.srcLong = srcLong;
	}

	public int getNoOfSeats() {
		return noOfSeats;
	}

	public void setNoOfSeats(int noOfSeats) {
		this.noOfSeats = noOfSeats;
	}

}