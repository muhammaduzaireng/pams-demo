import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Shared/Navbar';
import Sidebar from './components/Shared/Sidebar';
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import Clients from './pages/Clients';
import Appointments from './pages/Appointments';
import AddAppointment from './pages/AddAppointment';
import NotFound from './pages/NotFound';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css'; // Ensure you have this file for custom styles

function App() {
  return (
    <Router basename="/pams-demo">
      <div className="App">
        <Navbar />
        <Container fluid>
          <Row>
            <Col md={2} className="sidebar-col">
              <Sidebar />
            </Col>
            <Col md={10} className="content-col">
              <div className="content">
                <Routes>
                  <Route path="/" element={<Navigate to="/dashboard" />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/employees" element={<Employees />} />
                  <Route path="/clients" element={<Clients />} />
                  <Route path="/appointments" element={<Appointments />} />
                  <Route path="/appointments/add" element={<AddAppointment />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;