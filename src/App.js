import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/main";
import Nav from "react-bootstrap/Nav";

function App() {
  return (
    <div className="App">
      <Nav fill variant="tabs">
        <Nav.Item>
          <Nav.Link href="/landingpage">HOME</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/about">INFO</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/map">DOVE SIAMO</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/contact">CONTATTI</Nav.Link>
        </Nav.Item>
      </Nav>

      <Main />
    </div>
  );
}

export default App;
