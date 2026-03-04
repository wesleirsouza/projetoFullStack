package com.example.backend.repository;

import com.example.backend.model.Post;
import com.example.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface PostRepository extends JpaRepository<Post, Long> {
     //   @Query("Select p From Post p Where p.email=:email and u.password=:password")
    //  public User validationLogin(@Param("email") String email, @Param("password") String password);
   // }
}
