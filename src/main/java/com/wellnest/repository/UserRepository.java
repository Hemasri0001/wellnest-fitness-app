package com.wellnest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.wellnest.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

}