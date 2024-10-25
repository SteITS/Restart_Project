package com.restart.controller;


import com.restart.dto.UserDto;
import com.restart.service.UserServiceImpl;
import com.restart.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/")
public class UserController {

    @Autowired
    private UserServiceImpl userService;
    //Recupera la lista di tutti gli utenti
    @GetMapping("deb/users")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    //Recupera l'utente autenticato
    @GetMapping("auth/authUser")
    public ResponseEntity<UserDto> getCurrentUser() {
        return ResponseEntity.ok(userService.mapToUserDto(userService.getAuthenticatedUser()));
    }

    // Rimuove dal db l'utente con l'id specificato
    @DeleteMapping("auth/deleteUser/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Integer id) {
        userService.deleteUserById(id);
        return ResponseEntity.ok().build();
    }

    // Aggiorna l'utente con i dati passati nel body
    @PutMapping("auth/updateUser")
    public ResponseEntity<UserDto> updateUser(@RequestBody UserDto userDto) {
        try {
            userService.updateUser(userDto);
            return ResponseEntity.ok(userDto);
        } catch (Exception e) {
            return ResponseEntity.noContent().build();
        }
    }

    @PutMapping("auth/updateSelf")
    public ResponseEntity<UserDto> updateSelf(@RequestBody UserDto userDto) {
        User user = userService.getAuthenticatedUser();
        userDto.setId(user.getId());
        if(!userService.checkEmail(userDto.getEmail())){
            return ResponseEntity.status(HttpStatus.NOT_MODIFIED) // 304
                    .body(userDto);
        }
        if(!userService.checkPassword(userDto.getPassword()) && !userDto.getPassword().isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE) // 406
                    .body(userDto);
        }
        try {
            userService.updateSelf(userDto);
            return ResponseEntity.ok(userDto);
        } catch (Exception e) {
            return ResponseEntity.noContent().build();
        }
    }
}
