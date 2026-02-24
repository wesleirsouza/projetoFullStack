package com.example.backend.Mapper;

import com.example.backend.DTO.UserRequestDTO;
import com.example.backend.DTO.UserResponseDTO;
import com.example.backend.model.User;

public class UserMapper {

    public static UserResponseDTO toDTO(User user) {
        if (user == null) {
            return null;
        }

        UserResponseDTO dto = new UserResponseDTO();

        dto.setId(user.getId());
        dto.setName(user.getName());
        dto.setSurname(user.getSurname());
        dto.setTelephone(user.getTelephone());
        dto.setEmail(user.getEmail());

        return dto;
    }

    public static User toDomain(UserRequestDTO user) {
        if (user == null) {
            return null;
        }

        User domain= new User();

        domain.setId(user.getId());
        domain.setName(user.getName());
        domain.setSurname(user.getSurname());
        domain.setTelephone(user.getTelephone());
        domain.setEmail(user.getEmail());
        domain.setPassword(user.getPassword());

        return domain;
    }
}