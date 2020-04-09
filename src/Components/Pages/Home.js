import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container'; 
// import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
// import ListGroup from 'react-bootstrap/ListGroup'

// import * as firebase from 'firebase';

const HomePage = () => (
    <>
    <Container fluid>
        <Jumbotron  className="jumbo">
            <h1>Beer Me</h1>
            <h2>The Leading Craft Beer Trading Site</h2>
        </Jumbotron>
    </Container>

    <Container>
    <Col xs={8} className="bodyHome">
        
    </Col> 
    </Container>
    </>
);  

export default HomePage;