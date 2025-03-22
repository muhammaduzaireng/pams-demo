import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import clientService from '../../services/clientService';
import { Link } from 'react-router-dom';

const ClientList = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    clientService.getAllClients().then(data => setClients(data));
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
        {clients.map(client => (
          <tr key={client.id}>
            <td>{client.id}</td>
            <td>{client.name}</td>
            <td>{client.email}</td>
            <td>
              <Button as={Link} to={`/clients/edit/${client.id}`} variant="warning" className="mr-2">Edit</Button>
              <Button variant="danger">Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ClientList;