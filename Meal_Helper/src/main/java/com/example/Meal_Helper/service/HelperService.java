package com.example.Meal_Helper.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.example.Meal_Helper.model.Meal_Helper;
import com.example.Meal_Helper.repository.HelperRepository;

@Service
public class HelperService {
	
	@Autowired
	HelperRepository helperrepository;
	
	// get all items
	
	public Iterable<Meal_Helper> getItems(){
		return helperrepository.findAll();
		
	}
	// get items by ID
	
		public Meal_Helper getItemById(Long id) {
			return helperrepository.findById(id).get();
		}
		// post / create
		
		public Meal_Helper createItem(Meal_Helper item) {
			return helperrepository.save(item);
		}
		
		// update our items
		
		public Meal_Helper updateItems(Meal_Helper item) {
			return helperrepository.save(item);
		}
		
		// delete our items
		public HttpStatus deleteItem(Long id) {
			helperrepository.deleteById(id);
			return HttpStatus.OK;
		}
		

	}
