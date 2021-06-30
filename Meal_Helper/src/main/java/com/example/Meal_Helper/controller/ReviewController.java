package com.example.Meal_Helper.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Meal_Helper.model.ReviewModel;
import com.example.Meal_Helper.service.ReviewService;

@CrossOrigin
@RestController
@RequestMapping("/review")
public class ReviewController {

	@Autowired
	ReviewService reviewservice;

	//get all items
	@GetMapping
	public Iterable<ReviewModel> getItems(){
		return reviewservice.getItems();
	}
	
	//create item
	@PostMapping
	public ReviewModel createItem(@RequestBody ReviewModel item) {
		return reviewservice.createItem(item);
	}
	//get item by id
	@GetMapping("/{id}")
	public ReviewModel getItemById(@PathVariable Long id) {
		return reviewservice.getItemById(id);
	}
	//update items
		@PatchMapping 
		public ReviewModel updateItems(ReviewModel items) {
			return reviewservice.updateItems(items);
		}
		
		@DeleteMapping("/{id}")
		public HttpStatus deleteItem(@PathVariable Long id) {
			return reviewservice.deleteItem(id);
		}
		
	}

	
