package com.cineverse.auth.controller;

import com.cineverse.auth.dto.LoginRequest;
import com.cineverse.auth.dto.RegisterRequest;
import com.cineverse.auth.model.User;
import com.cineverse.auth.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/auth")
 // Crucial: Allows your React frontend to connect
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public String register(@RequestBody RegisterRequest request) {
        // Double-check if email already exists before inserting to prevent SQL errors
        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            return "Email is already registered!";
        }

        // Hash the password cleanly before saving
        String hashedPassword = passwordEncoder.encode(request.getPassword());
        
        User user = new User(request.getName(), request.getEmail(), hashedPassword);
        userRepository.save(user);
        return "User registered successfully!";
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest request) {
        Optional<User> userOptional = userRepository.findByEmail(request.getEmail());
        
        // Safe check: verifies the optional contains a record before processing .get()
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            if (passwordEncoder.matches(request.getPassword(), user.getPassword())) {
                return "Login successful!";
            } else {
                return "Invalid email or password!";
            }
        } else {
            return "Invalid email or password!"; // Securely handle non-existent user instances
        }
    }
}