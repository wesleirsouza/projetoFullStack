package com.example.backend.service;

import com.example.backend.model.Post;
import com.example.backend.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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


}
