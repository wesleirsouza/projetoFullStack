package com.example.backend.controller;

import com.example.backend.model.Post;
import com.example.backend.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/post")
public class PostController {

    @Autowired
    private PostService postService;

    @PostMapping(value = "/create", consumes = "multipart/form-data")
    public Post savePost(
            @RequestParam("text") String text,
            @RequestParam("image") MultipartFile image,
            @RequestParam("userId") Long userId
    ) throws IOException {

        Post post = new Post();
        post.setText(text);
        post.setImageData(image.getBytes());

        return postService.save(post);
    }
    @GetMapping("/findAll")
    public List<Post> findAll(){return postService.findAll();}

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deletePost(@PathVariable Long id) {
        postService.delete(id);
        return ResponseEntity.noContent().build();
    }



}
