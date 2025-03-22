import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import appointmentService from '../services/appointmentService';
import { useNavigate } from 'react-router-dom';

const AddAppointment = () => {
  const [client, setClient] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const timeSlots = [
    '09:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '12:00 PM - 01:00 PM',
    '01:00 PM - 02:00 PM',
    '02:00 PM - 03:00 PM',
    '03:00 PM - 04:00 PM',
    '04:00 PM - 05:00 PM',
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!client || !date || !timeSlot) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      await appointmentService.addAppointment({ client, date, timeSlot, notes });
      navigate('/appointments');
    } catch (err) {
      setError('Failed to add appointment. Please try again.');
    }
  };

  return (
    <Container>
      <h1>Add New Appointment</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formClient">
          <Form.Label>Client</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter client's name"
            value={client}
            onChange={(e) => setClient(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formDate">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formTimeSlot">
          <Form.Label>Time Slot</Form.Label>
          <Form.Control
            as="select"
            value={timeSlot}
            onChange={(e) => setTimeSlot(e.target.value)}
          >
            <option value="">Select a time slot</option>
            {timeSlots.map((slot, index) => (
              <option key={index} value={slot}>{slot}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formNotes">
          <Form.Label>Notes</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter any additional notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Appointment
        </Button>
      </Form>
    </Container>
  );
};

export default AddAppointment;