import React from 'react';
import EmployeeList from '../components/Employees/EmployeeList';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Employees = () => {
  return (
    <Container>
      <h1>Employees</h1>
      <Button as={Link} to="/employees/add" variant="primary" className="mb-3">Add Employee</Button>
      <EmployeeList />
    </Container>
  );
};

export default Employees;