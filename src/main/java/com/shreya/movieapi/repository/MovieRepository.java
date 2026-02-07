package com.shreya.movieapi.repository;

import com.shreya.movieapi.entity.Movie;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class MovieRepository {

    private final List<Movie> movies = new ArrayList<>();
    private int currentId = 1;

    // Save movie with auto ID
    public Movie save(Movie movie) {
        movie.setId(currentId++);
        movies.add(movie);
        return movie;
    }

    // Find by ID
    public Movie findById(int id) {
        return movies.stream()
                .filter(m -> m.getId() == id)
                .findFirst()
                .orElse(null);
    }

    // get all movies
    public List<Movie> findAll() {
        return movies;
    }

    public boolean deleteById(int id) {
        return movies.removeIf(m -> m.getId() == id);
    }

}
