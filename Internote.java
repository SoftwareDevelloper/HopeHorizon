package com.example.steamclone.Model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

import javax.management.relation.Role;

@Entity
public class Internote
{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @NotBlank(message = "username is required")
    private String username;
    @NotNull(message = "Email is required")
    @Email(message = "Invalid email format")
    private String email;
    @NotNull(message ="Password is required")
    @Size(min = 8,message = "Password must be at least 8 characters")
    private String password;
    @Enumerated(EnumType.STRING)
    private Role role;
    public enum Role{
        ADMIN,
        USER
    }

    public Internote() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }
}
