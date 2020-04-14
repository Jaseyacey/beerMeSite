import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container'; 
// import Col from 'react-bootstrap/Col';
import FetchRandomBeer from "../beerapi";
// import ListGroup from 'react-bootstrap/ListGroup';
// import * as firebase from 'firebase';
import { Button } from 'reactstrap';

const HomePage = () => (
    <>
    <Container fluid>
        <Jumbotron  className="jumbo">
            <h1>Beer Me</h1>
            <h2>The Leading Craft Beer Trading Site</h2>
        </Jumbotron>
    </Container>

    <Container>
        <div className="beerCont">
            <FetchRandomBeer />
        </div>
    </Container>
    <Container>
    <div className="bg-info clearfix" style={{ padding: '10rem' }}>
      <a href= "./login"><button className="btn btn-secondary float-left">Login</button></a>
      <a href= "./register"><button className="btn btn-danger float-right">Register</button></a>
    </div>
    </Container>

    <Container fluid> 
        <div className="footer">
            <footer>
            <span class="text-muted">Place sticky footer content here.</span>
            </footer>
        </div>
    </Container>
    </>
);  

export default HomePage;