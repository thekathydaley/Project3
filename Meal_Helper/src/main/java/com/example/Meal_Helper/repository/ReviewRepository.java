package com.example.Meal_Helper.repository;
import org.springframework.data.repository.CrudRepository;

import com.example.Meal_Helper.model.ReviewModel;

public interface ReviewRepository extends CrudRepository <ReviewModel, Long> {

}
