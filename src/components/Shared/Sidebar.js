import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Nav defaultActiveKey="/" className="flex-column">
      <Nav.Link as={Link} to="/">Dashboard</Nav.Link>
      <Nav.Link as={Link} to="/employees">Employees</Nav.Link>
      <Nav.Link as={Link} to="/clients">Clients</Nav.Link>
      <Nav.Link as={Link} to="/appointments">Appointments</Nav.Link>
    </Nav>
  );
};

export default Sidebar;