package com.cineverse.movie_service.model;

import jakarta.persistence.*;

@Entity
@Table(name = "movies")
public class Movie {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String title;
    private String genre;
    private String rating;
    
    @Column(name = "image_url")
    private String imageUrl;

    public Movie() {}

    public Movie(String title, String genre, String rating, String imageUrl) {
        this.title = title;
        this.genre = genre;
        this.rating = rating;
        this.imageUrl = imageUrl;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getGenre() { return genre; }
    public void setGenre(String genre) { this.genre = genre; }
    public String getRating() { return rating; }
    public void setRating(String rating) { this.rating = rating; }
    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }
}