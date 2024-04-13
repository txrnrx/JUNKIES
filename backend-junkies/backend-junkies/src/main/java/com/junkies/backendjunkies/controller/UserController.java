package com.junkies.backendjunkies.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.junkies.backendjunkies.exception.UserNotFoundException;
import com.junkies.backendjunkies.model.User;
import com.junkies.backendjunkies.repository.UserRepository;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserRepository userRepo;

    @PostMapping("/register")
    public User newUser(@RequestBody User newUser){
        System.out.println(newUser.getName());
        User savedUser = userRepo.save(newUser);
        if(savedUser != null) {
            System.out.println("User saved successfully: " + savedUser);
        } else {
            System.err.println("Failed to save user: " + newUser);
        }
        return savedUser;
    }

    @GetMapping("/users")
    public List<User> getAllUsers(){
        return userRepo.findAll();
    }

    @GetMapping("/user/{id}")
    public User getUserById(@PathVariable Long id){
        return userRepo.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody User loginRequest) {
        User user = userRepo.findByEmail(loginRequest.getEmail());

        if (user != null && user.getPassword().equals(loginRequest.getPassword())) {
            return ResponseEntity.ok("Login successful"+"["+user.getName()+","+user.getId()+"]");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }

    @PutMapping("/update/{id}")
    User updateUser(@RequestBody User newUser, @PathVariable Long id){
        return userRepo.findById(id)
                .map(user -> {
                    user.setName(newUser.getName());
                    user.setEmail(newUser.getEmail());
                    user.setPassword(newUser.getPassword());
                    return userRepo.save(user);
                }).orElseThrow(()->new UserNotFoundException(id));
    }

    @DeleteMapping("/delete/{id}")
    String deleteUser(@PathVariable Long id){
        if(!userRepo.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepo.deleteById(id); 
        return "user with id "+id+" has been deleted success.";
    }

    @PatchMapping("/update/{id}")
public ResponseEntity<User> patchUser(@RequestBody User partialUser, @PathVariable Long id) {
    return userRepo.findById(id)
            .map(user -> {
                if (partialUser.getName() != null) {
                    user.setName(partialUser.getName());
                }
                if (partialUser.getEmail() != null) {
                    user.setEmail(partialUser.getEmail());
                }
                if (partialUser.getPassword() != null) {
                    user.setPassword(partialUser.getPassword());
                }
                return ResponseEntity.ok(userRepo.save(user));
            }).orElseThrow(() -> new UserNotFoundException(id));
}
}


