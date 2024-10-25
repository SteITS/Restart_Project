package com.restart.service;

import com.restart.dto.UserDto;
import com.restart.entity.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    void saveUser(UserDto userDto);

    Boolean checkPassword(String password);

    Boolean checkEmail(String email);

    User getAuthenticatedUser();

    User findUserByEmail(String email);

    List<UserDto> findAllUsers();

    List<User> getAllUsers();

    Optional<User> findUserById(Integer id);
    
    void deleteUserById(Integer id);
    
    void updateUser(UserDto userDto);
}