// // import React from "react";
// // import firebase from "../Firebase/firebase";
// // import {
// //   Grid,
// //   Form,
// //   Segment,
// //   Button,
// //   Header,
// //   Message,
// //   Icon
// // } from "semantic-ui-react";
// // import { Link } from "react-router-dom";

// // class Login extends React.Component {
// //   state = {
// //     email: "",
// //     password: "",
// //     errors: [],
// //     loading: false
// //   };

// //   displayErrors = errors =>
// //     errors.map((error, i) => <p key={i}>{error.message}</p>);

// //   handleChange = event => {
// //     this.setState({ [event.target.name]: event.target.value });
// //   };

// //   handleSubmit = event => {
// //     event.preventDefault();
// //     if (this.isFormValid(this.state)) {
// //       this.setState({ errors: [], loading: true });
// //       firebase
// //         .auth()
// //         .signInWithEmailAndPassword(this.state.email, this.state.password)
// //         .then(signedInUser => {
// //           console.log(signedInUser);
// //         })
// //         .catch(err => {
// //           console.error(err);
// //           this.setState({
// //             errors: this.state.errors.concat(err),
// //             loading: false
// //           });
// //         });
// //     }
// //   };

// //   isFormValid = ({ email, password }) => email && password;

// //   handleInputError = (errors, inputName) => {
// //     return errors.some(error => error.message.toLowerCase().includes(inputName))
// //       ? "error"
// //       : "";
// //   };

// //   render() {
// //     const { 
// //       email, 
// //       password, 
// //       errors, 
// //       loading 
// //     } = this.state;

// //     return (
// //       <Grid textAlign="center" verticalAlign="middle" className="app">
// //         <Grid.Column style={{ maxWidth: 450 }}>
// //           <Header as="h1" icon color="blue" textAlign="center">
// //             <Icon name="beer" color="blue" />
// //             Login to beerTradr
// //           </Header>
// //           <Form onSubmit={this.handleSubmit} size="large">
// //             <Segment stacked>
// //               <Form.Input
// //                 fluid
// //                 name="email"
// //                 icon="mail"
// //                 iconPosition="left"
// //                 placeholder="Email Address"
// //                 onChange={this.handleChange}
// //                 value={email}
// //                 className={this.handleInputError(errors, "email")}
// //                 type="email"
// //               />

// //               <Form.Input
// //                 fluid
// //                 name="password"
// //                 icon="lock"
// //                 iconPosition="left"
// //                 placeholder="Password"
// //                 onChange={this.handleChange}
// //                 value={password}
// //                 className={this.handleInputError(errors, "password")}
// //                 type="password"
// //               />

// //               <Button
// //                 disabled={loading}
// //                 className={loading ? "loading" : ""}
// //                 color="blue"
// //                 fluid
// //                 size="large"
// //               >
// //                 Submit
// //               </Button>
// //             </Segment>
// //           </Form>
// //           {errors.length > 0 && (
// //             <Message error>
// //               <h3>Error</h3>
// //               {this.displayErrors(errors)}
// //             </Message>
// //           )}
// //           <Message>
// //             Don't have an account? <Link to="/register">Register</Link>
// //           </Message>
// //         </Grid.Column>
// //       </Grid>
// //     );
// //   }
// // }

// // export default Login;

  
// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import firebase from '../Firebase/firebase';

// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.login = this.login.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//     this.signup = this.signup.bind(this);
//     this.state = {
//       email: '',
//       password: ''
//     };
//   }

//   handleChange(e) {
//     this.setState({ [e.target.name]: e.target.value });
//   }

//   login(e) {
//     e.preventDefault();
//     firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
//     }).catch((error) => {
//         console.log(error);
//       });
//   }

//   signup(e){
//     e.preventDefault();
//     firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
//     }).then((u)=>{console.log(u)})
//     .catch((error) => {
//         console.log(error);
//       })
//   }
//   render() {
//     return (
//       <div className="col-md-6">
//         <form>
//           <div class="form-group">
//             <label for="exampleInputEmail1">Email address</label>
//             <input  value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
//             <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
//           </div>
//           <div class="form-group">
//             <label for="exampleInputPassword1">Password</label>
//             <input  value={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
//           </div>
//           <button type="submit" onClick={this.login} class="btn btn-primary">Login</button>
//           <button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success">Signup</button>
//         </form>
      
//       </div>
//     );
//   }
// }
// export default Login;


import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from './config/Fire';

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
      });
  }

  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
      })
  }
  render() {
    return (
      <div className="col-md-6">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input  value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input  value={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <button type="submit" onClick={this.login} class="btn btn-primary">Login</button>
          <button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success">Signup</button>
        </form>
      
      </div>
    );
  }
}
export default Login;