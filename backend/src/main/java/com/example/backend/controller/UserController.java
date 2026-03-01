package com.example.backend.controller;

import com.example.backend.DTO.Parameter.LoginDTO;
import com.example.backend.DTO.UserRequestDTO;
import com.example.backend.DTO.UserResponseDTO;
import com.example.backend.model.User;
import com.example.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin (origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/registration")
    public UserResponseDTO save(@RequestBody UserRequestDTO user){return userService.save(user);}

    @PostMapping("/login")
    public ResponseEntity<?> loginConfirm(@RequestBody LoginDTO loginDTO){
        boolean isValid = userService.loginConfirm(loginDTO);

        if(isValid){
            return ResponseEntity.ok("Login realizado com sucesso");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body("Email ou senha inválidos");
        }
    }
}
