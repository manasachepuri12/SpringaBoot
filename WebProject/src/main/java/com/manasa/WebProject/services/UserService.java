package com.manasa.WebProject.services;

import java.util.ArrayList;
import java.util.List;

import com.manasa.WebProject.model.User;

public class UserService {

    private List<User> allUsers;

    public UserService() {
        allUsers = new ArrayList<>();
        allUsers.add(new User("John", "Male", "img/john.png", 0));
        allUsers.add(new User("Jane", "Female", "img/jane.png", 1));
    }

    public List<User> getAllUsers() {
        return allUsers;
    }
}