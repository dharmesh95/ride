package com.dharmesh.ride.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "grades")
public class Grades {

	@Id
	private String id;

	@Field("student_id")
	private String studentId;

	private Score[] scores;

	@Field("class_id")
	private String classId;

	public String getStudentId() {
		return studentId;
	}

	public void setStudentId(String studentId) {
		this.studentId = studentId;
	}

	public Score[] getScores() {
		return scores;
	}

	public void setScores(Score[] scores) {
		this.scores = scores;
	}

	public String getClassId() {
		return classId;
	}

	public void setClassId(String classId) {
		this.classId = classId;
	}

}
