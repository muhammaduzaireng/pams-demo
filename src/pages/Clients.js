import React from 'react';
import ClientList from '../components/Clients/ClientList';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Clients = () => {
  return (
    <Container>
      <h1>Clients</h1>
      <Button as={Link} to="/clients/add" variant="primary" className="mb-3">Add Client</Button>
      <ClientList />
    </Container>
  );
};

export default Clients;