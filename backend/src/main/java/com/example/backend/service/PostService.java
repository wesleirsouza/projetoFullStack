package com.example.backend.service;

import com.example.backend.model.Post;
import com.example.backend.repository.PostRepository;
import jakarta.persistence.Id;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostService {

    @Autowired
    PostRepository postRepository;

    public Post save(Post post){
        return postRepository.save(post);
    }

    public List<Post> findAll(){
        return postRepository.findAll();
    }

    public void delete(Long id){
        Optional<Post> post = postRepository.findById(id);
        post.ifPresent(value -> postRepository.delete(value));
    }


}
