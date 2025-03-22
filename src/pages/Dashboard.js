import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <Container>
      <h1>Dashboard</h1>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Employees</Card.Title>
              <Card.Text>
                Manage all your employees here.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Clients</Card.Title>
              <Card.Text>
                Manage all your clients here.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Appointments</Card.Title>
              <Card.Text>
                Manage all your appointments here.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;