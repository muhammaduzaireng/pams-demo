import React, { useState } from 'react';

const Appointments = ({ user }) => {
  const [appointments, setAppointments] = useState([
    { id: 1, client_name: 'Alice', date: '2023-10-15 10:00', status: 'pending' },
    { id: 2, client_name: 'Bob', date: '2023-10-16 14:00', status: 'completed' },
  ]);

  const handleDelete = (id) => {
    setAppointments(appointments.filter((appointment) => appointment.id !== id));
  };

  return (
    <div className="appointments-container">
      <h1>Appointments</h1>
      {appointments.map((appointment) => (
        <div key={appointment.id} className="appointment-card">
          <p><strong>Client:</strong> {appointment.client_name}</p>
          <p><strong>Date:</strong> {appointment.date}</p>
          <p><strong>Status:</strong> {appointment.status}</p>
          {user.role === 'manager' && (
            <button onClick={() => handleDelete(appointment.id)}>Delete</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Appointments;