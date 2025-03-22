import React from 'react';
import AppointmentList from '../components/Appointments/AppointmentList';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Appointments = () => {
  return (
    <Container>
      <h1>Appointments</h1>
      <Button as={Link} to="/appointments/add" variant="primary" className="mb-3">Add Appointment</Button>
      <AppointmentList />
    </Container>
  );
};

export default Appointments;