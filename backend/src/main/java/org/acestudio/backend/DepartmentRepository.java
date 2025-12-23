package org.acestudio.backend;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DepartmentRepository extends JpaRepository<Department, Long> {

    // Find a department exactly by its name (useful for the "exists" check)
    Optional<Department> findByName(String name);

    // Check if a department exists by name to prevent duplicates in Java
    boolean existsByName(String name);

    // Find departments located in a specific building/city
    Iterable<Department> findByLocation(String location);
}
