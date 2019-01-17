package com.qa.dave.controller;

import java.util.List;

import javax.validation.Valid;

//import org.hibernate.mapping.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.qa.dave.Repository.filmRepository;
import com.qa.dave.exception.ResourceNotFoundException;
import com.qa.dave.model.dataModel;
@RestController
@RequestMapping("/api")

public class dataController {

	@Autowired
	filmRepository myRepository;
	
	// Method to get all films
		@CrossOrigin
		@GetMapping("/films")
		public List<dataModel> getAllFilms() {
			return myRepository.findAll();
		}
	
	
}
