package com.wellnest.controller;

import com.wellnest.entity.Workout;
import com.wellnest.repository.WorkoutRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/workouts")
@CrossOrigin(origins = "http://localhost:3000")
public class WorkoutController {

    private final WorkoutRepository repository;

    public WorkoutController(WorkoutRepository repository) {
        this.repository = repository;
    }

    // Add workout
    @PostMapping
    public Workout addWorkout(@RequestBody Workout workout) {
        return repository.save(workout);
    }

    // Get all workouts
    @GetMapping
    public List<Workout> getWorkouts() {
        return repository.findAll();
    }

    // Delete workout
    @DeleteMapping("/{id}")
    public void deleteWorkout(@PathVariable Long id) {
        repository.deleteById(id);
    }
}