import React, { Component } from 'react'; 
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import HomePage from './Components/Pages/Home';
import AboutPage from './Components/Pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <NavBar />
                    <div id="page-body">
                        <Switch>
                            <Route path="/" component={HomePage} exact  />      
                            <Route path="/about" component={AboutPage} exact  />                  
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}
export default App;