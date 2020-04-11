import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container'; 
// import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
// import ListGroup from 'react-bootstrap/ListGroup';
import beerapi from "../beerapi";
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
    <Col sm={6} className="mostWanted">
        <div className="media">
            <a className="pull-left" href="/beer/237985">
            <img height ="50" src="https://untappd.akamaized.net/site/beer_logos/beer-237985_c70fc_sm.jpeg"></img>
            </a>
        </div>
    </Col> 

    </Container>
    </>
);  

export default HomePage;