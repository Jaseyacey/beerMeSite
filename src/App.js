import React, { Component } from 'react'; 
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import HomePage from './Components/Pages/Home';
import AboutPage from './Components/Pages/About';   
import loginPage from './Components/Auth/Login';
import registerPage from './Components/Auth/Register';
import contactMe from './Components/Pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
// import FetchRandomBeer from './Components/beerapi';
import firebase from './Components/Firebase/firebase'
import './App.css'


class App extends Component {
    constructor() {
      super();
      this.state = ({
        user: null,
      });
      this.authListener = this.authListener.bind(this);
    }
  
    componentDidMount() {
      this.authListener();
    }
  
    authListener() {
      firebase.auth().onAuthStateChanged((user) => {
        console.log(user);
        if (user) {
          this.setState({ user });
          localStorage.setItem('user', user.uid);
        } else {
          this.setState({ user: null });
          localStorage.removeItem('user');
        }
      });
    }
  
    render() {
        return (
            <Router>
                <div className="App">
                <NavBar />
                    <div id="page-body">
                        <Switch>
                            <Route path="/" component={HomePage} exact  />      
                            <Route path="/about" component={AboutPage} exact  />
                            <Route path="/login" component={loginPage} exact  />
                            <Route path="/contact" component={contactMe} exact  />
                            <Route path="/register" component={registerPage} exact/>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}
export default App;