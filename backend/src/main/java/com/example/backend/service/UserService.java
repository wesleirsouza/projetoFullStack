package com.example.backend.service;

import com.example.backend.DTO.UserRequestDTO;
import com.example.backend.DTO.UserResponseDTO;
import com.example.backend.Mapper.UserMapper;
import com.example.backend.model.User;
import com.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public UserResponseDTO save(UserRequestDTO userRequestDTO){
        User user = UserMapper.toDomain(userRequestDTO);
        User newUser = userRepository.save(user);
        return UserMapper.toDTO(newUser);
    }

}
