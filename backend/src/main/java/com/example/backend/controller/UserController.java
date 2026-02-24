package com.example.backend.controller;

import com.example.backend.DTO.UserRequestDTO;
import com.example.backend.DTO.UserResponseDTO;
import com.example.backend.model.User;
import com.example.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin (origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/registration")
    public UserResponseDTO save(@RequestBody UserRequestDTO user){return userService.save(user);}
}
