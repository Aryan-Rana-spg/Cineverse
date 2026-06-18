package com.cineverse.auth.repository;

import com.cineverse.auth.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional; // <--- THIS IS THE MISSING LINE

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}