import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Shared/Navbar';
import Sidebar from './components/Shared/Sidebar';
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import Clients from './pages/Clients';
import Appointments from './pages/Appointments';
import NotFound from './pages/NotFound';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Container fluid>
          <Row>
            <Col md={2}>
              <Sidebar />
            </Col>
            <Col md={10}>
              <div className="content">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/employees" element={<Employees />} />
                  <Route path="/clients" element={<Clients />} />
                  <Route path="/appointments" element={<Appointments />} />
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