package com.example.backend.DTO;

import com.example.backend.model.User;
import lombok.Data;

@Data
public class PostResponseDTO {
    private Long id;
    private String name;
    private String surname;
    private String text;
    private  byte[] imageData;

}
