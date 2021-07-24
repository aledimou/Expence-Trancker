import React from "react";
import {Container, Row, Col} from 'react-bootstrap'
import Balance from "./components/Balance"
import History from "./components/History";
import UserForm from "./components/UserForm";

function App() {
  return (
    <>
    <Container className = "container">
      <h1>
       Expence Tracker
      </h1>
      <Row className = "balance-row">
        <Col className = "balance-col">
        <Balance />
        </Col>
      </Row>
      <Row className = "hisotry-row">
        <Col className = "history-col">
        <History />
        </Col>
      </Row>
      <Row className = "form-row">
        <Col className = "form-col">
        <UserForm />
        </Col>
      </Row>
    </Container>
   </>
  );
}

export default App;
