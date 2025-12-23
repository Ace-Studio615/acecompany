package org.acestudio.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private EmployeeRepository employeeRepo;

    @Autowired
    private DepartmentRepository deptRepo;

    @Autowired
    private ObjectMapper objectMapper;

    @Override
    public void run(String... args) throws Exception {
        if(deptRepo.count()==0){
            InputStream inputStream = getClass().getResourceAsStream("/data.json");
            try{
                List<Department> departments = objectMapper.readValue(inputStream,
                        new TypeReference<List<Department>>(){});
                departments.forEach(dept -> {
                    if(dept.getEmployees() != null){
                        dept.getEmployees().forEach(employee -> employee.setDepartment(dept));
                    }
                });
                deptRepo.saveAll(departments);
                System.out.println("Database seeded from JSON file. "+deptRepo.findAll());
            }catch(IOException e){
                System.out.println("Unable to save departments: " + e.getMessage());
            }
        }else{
            System.out.println("Database already contains data, skipping JSON seed.");
        }

        // Use an "exists" check to avoid duplicates
        String email = "alice@company.com";
        if (!employeeRepo.existsByEmail(email)) {
            Employee emp = new Employee();
            emp.setName("Alice");
            emp.setEmail(email);
            employeeRepo.save(emp);
            System.out.println("Seeded Alice!");
        } else {
            System.out.println("Alice already exists, skipping...");
        }
    }
}
