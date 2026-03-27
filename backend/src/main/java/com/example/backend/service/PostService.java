package com.example.backend.service;

import com.example.backend.DTO.PostResponseDTO;
import com.example.backend.Mapper.PostMapper;
import com.example.backend.model.Post;
import com.example.backend.repository.PostRepository;
import jakarta.persistence.Id;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class PostService {

    @Autowired
    PostRepository postRepository;

    public Post save(Post post){
        return postRepository.save(post);
    }

    public List<PostResponseDTO> findAll(){
        List<Post> postList = postRepository.findAll();
        List<PostResponseDTO> postResponseDTO = new ArrayList<>();
        for (Post post : postList){
            postResponseDTO.add(PostMapper.toDTO(post));
        }
        return postResponseDTO;
    }

    public void delete(Long id){
        Optional<Post> post = postRepository.findById(id);
        post.ifPresent(value -> postRepository.delete(value));
    }


}
