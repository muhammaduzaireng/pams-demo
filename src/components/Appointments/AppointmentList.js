import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import appointmentService from '../../services/appointmentService';
import { Link } from 'react-router-dom';

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    appointmentService.getAllAppointments().then(data => setAppointments(data));
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Client</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {appointments.map(appointment => (
          <tr key={appointment.id}>
            <td>{appointment.id}</td>
            <td>{appointment.client}</td>
            <td>{appointment.date}</td>
            <td>
              <Button as={Link} to={`/appointments/edit/${appointment.id}`} variant="warning" className="mr-2">Edit</Button>
              <Button variant="danger">Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default AppointmentList;