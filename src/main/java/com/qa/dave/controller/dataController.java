package com.qa.dave.controller;

import java.util.List;

import javax.persistence.criteria.Order;
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
@CrossOrigin(origins = "http://localhost:3000")
public class dataController {

	@Autowired
	filmRepository myRepository;
	
	// Method to get all films

		@GetMapping("/films")
		public List<dataModel> getAllFilms() {
			return myRepository.findAll();
		}
		
		
//		@PostMapping("/films")
//		public dataModel createFilm(@Valid @RequestBody dataModel sDGM) {
//			return myRepository.save(sDGM);
//		}
		
//		@PostMapping("/vehicle/{vehicleId}/orders")
//		public Order createComment(@PathVariable (value = "vehicleId") Long vehicleId,
//				@Valid @RequestBody) {
//			return myRepository.findById(vehicleId).map(vehicle -> {
//				order.setVehicle(vehicle);
//				return orderRepository.save(order);
//			}).orElseThrow(() -> new ResourceNotFoundException("Vehicle", "id", order));
//		}

		@PostMapping("/films")
		public dataModel createFilm(@Valid @RequestBody dataModel sDGM) {
			return myRepository.save(sDGM);
		}
	
//		@DeleteMapping("/films/{id}")
//		public ResponseEntity<?> deleteFilm(@PathVariable(value = "id") Long questionID) {
//			dataModel mSDM = myRepository.findById(questionID)
//					.orElseThrow(() -> new ResourceNotFoundException("Question", "id", questionID));
//
//			myRepository.delete(mSDM);
//			return ResponseEntity.ok().build();
//
//		}

		
	
}
