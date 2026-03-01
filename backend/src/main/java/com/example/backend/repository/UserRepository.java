package com.example.backend.repository;

import com.example.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<User, Long> {
    @Query("Select u From User u Where u.email=:email and u.password=:password")
    public User validationLogin(@Param("email") String email, @Param("password") String password);
}