import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import { MembersOnly } from './components/MembersOnly';
import { Home } from './components/Home';
import ProtectedRoutes from './ProtectedRoutes';
import { LogIn } from './components/LogIn';




function App() {
  return (
    <BrowserRouter>
    <div className="App">



      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">MySite</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/MembersOnly">Members Only</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <br />
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/LogIn" element={<LogIn/>}/>
          <Route path="MembersOnly" element={<ProtectedRoutes/>}/>
            
        </Routes>

      </div>

    </div>
    </BrowserRouter>
  );
}

export default App;
