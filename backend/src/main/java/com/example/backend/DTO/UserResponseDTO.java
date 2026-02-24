package com.example.backend.DTO;
import lombok.Data;

@Data
public class UserResponseDTO {
    private Long id;
    private String name;
    private String surname;
    private Long telephone;
    private String email;
}
