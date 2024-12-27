package com.example.employee_management.service;

import com.example.employee_management.model.Employee;
import com.example.employee_management.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    public Employee saveEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    public Employee getEmployeeById(Integer id) {
        return employeeRepository.findById(id).orElse(null);
    }

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public Employee updateEmployee(Integer id, Employee employeeDetails) {
        Employee existingEmployee = employeeRepository.findById(id).orElse(null);
        if (existingEmployee != null) {
            existingEmployee.setFirstName(employeeDetails.getFirstName());
            existingEmployee.setLastName(employeeDetails.getLastName());
            existingEmployee.setAge(employeeDetails.getAge());
            existingEmployee.setAddress(employeeDetails.getAddress());
            existingEmployee.setPhoneNumber(employeeDetails.getPhoneNumber());
            existingEmployee.setEmail(employeeDetails.getEmail());
            existingEmployee.setPosition(employeeDetails.getPosition());
            existingEmployee.setSalary(employeeDetails.getSalary());
            existingEmployee.setDepartment(employeeDetails.getDepartment());
            existingEmployee.setStartDate(employeeDetails.getStartDate());
            return employeeRepository.save(existingEmployee);
        }
        return null;
    }

    public void deleteEmployee(Integer id) {
        employeeRepository.deleteById(id);
    }
}
