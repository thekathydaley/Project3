package com.example.Meal_Helper.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.example.Meal_Helper.model.ReviewModel;
import com.example.Meal_Helper.repository.ReviewRepository;

@Service
public class ReviewService {
	
	@Autowired
	ReviewRepository reviewrepository;
	
	// get all items
	
	public Iterable<ReviewModel> getItems(){
		return reviewrepository.findAll();
		
	}
	// get items by ID
	
		public ReviewModel getItemById(Long id) {
			return reviewrepository.findById(id).get();
		}
		// post / create
		
		public ReviewModel createItem(ReviewModel item) {
			return reviewrepository.save(item);
		}
		
		// update our items
		
		public ReviewModel updateItems(ReviewModel item) {
			return reviewrepository.save(item);
		}
		
		// delete our items
		public HttpStatus deleteItem(Long id) {
			reviewrepository.deleteById(id);
			return HttpStatus.OK;
		}
		

	}
