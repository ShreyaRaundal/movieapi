package com.shreya.movieapi.controller;

import com.shreya.movieapi.entity.Movie;
import com.shreya.movieapi.repository.MovieRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/movies")
public class MovieController {

    private final MovieRepository movieRepository;

    public MovieController(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    // ADD MOVIE
    @PostMapping
    public ResponseEntity<?> addMovie(@RequestBody Movie movie) {

        if (movie.getName() == null || movie.getName().isBlank()) {
            return ResponseEntity.badRequest().body("Movie name is required");
        }

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(movieRepository.save(movie));
    }

    // GET MOVIE BY ID
    @GetMapping("/{id}")
    public ResponseEntity<?> getMovieById(@PathVariable int id) {

        Movie movie = movieRepository.findById(id);

        if (movie == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(movie);
    }

    // ✅ GET ALL MOVIES
    @GetMapping
    public ResponseEntity<List<Movie>> getAllMovies() {
        return ResponseEntity.ok(movieRepository.findAll());
    }

    // DELETE MOVIE
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteMovie(@PathVariable int id) {

        boolean deleted = movieRepository.deleteById(id);

        if (!deleted) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok().build();
    }
}
