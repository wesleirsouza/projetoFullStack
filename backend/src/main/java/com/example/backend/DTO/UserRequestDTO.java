package com.example.backend.DTO;
import lombok.Data;

@Data
public class UserRequestDTO {
    private Long id;
    private String name;
    private String surname;
    private Long telephone;
    private String email;
    private String password;
}
