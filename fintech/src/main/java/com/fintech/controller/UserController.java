package com.fintech.controller;

import com.fintech.model.User;
import com.fintech.model.LoginRequest;
import com.fintech.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.Map;
import java.util.HashMap;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*") // Allow all origins; adjust for production
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<Map<String, Object>> createUser(@RequestBody User user) {
        // Set default role if it's null or empty
        if (user.getRole() == null || user.getRole().isEmpty()) {
            user.setRole("admin");
        }

        userService.createUser(user);

        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("message", "User Registered Successfully");

        return ResponseEntity.ok(response);
    }

    // Register a new user
    // @PostMapping
    // public ResponseEntity<Map<String, Object>> createUser(@RequestBody User user) {
    //     userService.createUser(user);
    //     Map<String , Object> response = new HashMap<>();
    //     response.put("success", true);
    //     response.put("message", "User Registered Successfully");
    //     return ResponseEntity.ok(response);
    // }


    // Login user
    @PostMapping("/login")
    public ResponseEntity<Object> loginUser(@RequestBody LoginRequest loginRequest) {
    Optional<User> user = userService.authenticateUser(
            loginRequest.getEmail(),
            loginRequest.getPassword()
    );

    if (user.isPresent()) {
        // Create a response object with the user data and success flag
        return ResponseEntity.ok().body(
            Map.of(
                "message", "Log In Successfully",
                "success", true,
                "user", user.get()
            )
        );
    } else {
        // Return 401 Unauthorized with the error message and success flag as false
        return ResponseEntity.status(401).body(
            Map.of(
                "message", "Invalid email or password",
                "success", false
            )
        );
    }
    }

    // Update user
    @PutMapping("/update/{id}")
    public ResponseEntity<String> updateUser(@PathVariable Long id, @RequestBody User user) {
        boolean userExists = userService.getUserById(id).isPresent();

        if (!userExists) {
            return ResponseEntity.status(404).body("User not found");
        }

        userService.updateUser(id, user);
        return ResponseEntity.ok("User updated successfully");
    }

    // Delete user
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long id) {
        boolean userExists = userService.getUserById(id).isPresent();

        if (!userExists) {
            return ResponseEntity.status(404).body("User not found");
        }

        userService.deleteUser(id);
        return ResponseEntity.ok("User deleted successfully");
    }
}
