package com.example.backend.repository;

import com.example.backend.model.Post;
import com.example.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface PostRepository extends JpaRepository<Post, Long> {
       //@Query("Select p From Post p Where p.id =: id and p.name =: name and p.surname =: surname and p.text =: text and p.imageData =: imageData")
    // public Post findAll(@Param("id") long id, @Param("name") String name, @Param("surname") String surname, @Param("text") String text, @Param("imageData") String name);
  // }
}
