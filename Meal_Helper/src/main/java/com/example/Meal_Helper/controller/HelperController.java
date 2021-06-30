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

import com.example.Meal_Helper.model.Meal_Helper;
import com.example.Meal_Helper.service.HelperService;
@CrossOrigin
@RestController
@RequestMapping("/meal_helper")
public class HelperController {
	
	@Autowired
	HelperService helperservice;

	//get all items
	@GetMapping
	public Iterable<Meal_Helper> getItems(){
		return helperservice.getItems();
	}
	
	//create item
	@PostMapping
	public Meal_Helper createItem(@RequestBody Meal_Helper item) {
		return helperservice.createItem(item);
	}
	//get item by id
	@GetMapping("/{id}")
	public Meal_Helper getItemById(@PathVariable Long id) {
		return helperservice.getItemById(id);
	}
	//update items
		@PatchMapping 
		public Meal_Helper updateItems(Meal_Helper items) {
			return helperservice.updateItems(items);
		}
		
		@DeleteMapping("/{id}")
		public HttpStatus deleteItem(@PathVariable Long id) {
			return helperservice.deleteItem(id);
		}
		
	}

	

