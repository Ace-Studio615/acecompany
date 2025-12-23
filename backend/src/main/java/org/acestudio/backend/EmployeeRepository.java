package org.acestudio.backend;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    // Custom query to find employees by department name
    List<Employee> findByDepartmentName(String deptName);

    // This method tells Spring: "SELECT COUNT(*) FROM employee WHERE email = ?"
    // It returns true if the count > 0.
    boolean existsByEmail(String email);

    // Optional: Also helpful for finding the actual object by email
    Optional<Employee> findByEmail(String email);
}
