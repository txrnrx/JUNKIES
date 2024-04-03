package com.junkies.backendjunkies.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.junkies.backendjunkies.model.User;


public interface UserRepository extends JpaRepository<User,Long>
{
    User findByEmail(String username);
}
