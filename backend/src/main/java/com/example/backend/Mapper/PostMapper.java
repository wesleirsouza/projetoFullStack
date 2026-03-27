package com.example.backend.Mapper;

import com.example.backend.DTO.PostResponseDTO;
import com.example.backend.model.Post;


public class PostMapper {
    public static PostResponseDTO toDTO(Post post) {
        if (post == null) {
            return null;
        }

        PostResponseDTO dto = new PostResponseDTO();

        dto.setId(post.getId());
        if (post.getUser() != null) {
            dto.setName(post.getUser().getName());
            dto.setSurname(post.getUser().getSurname());
        }
        dto.setText(post.getText());
        dto.setImageData(post.getImageData());
        return dto;
    }
}
