import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import employeeService from '../../services/employeeService';
import { Link } from 'react-router-dom';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    employeeService.getAllEmployees().then(data => setEmployees(data));
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(employee => (
          <tr key={employee.id}>
            <td>{employee.id}</td>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>
              <Button as={Link} to={`/employees/edit/${employee.id}`} variant="warning" className="mr-2">Edit</Button>
              <Button variant="danger">Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default EmployeeList;