import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import NavBar from './components/NavBar';

import { Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount(){
    axios.get('http://localhost:3333/smurfs')
    .then(res => { this.setState({ smurfs: res.data }) })
    .catch(err => console.log(err))
  }

  addSmurf = smurf => {
    axios.post('http://localhost:3333/smurfs', smurf)
    .then(res => { 
      this.setState({ smurfs: res.data });
      this.props.history.push('/');
    })
    .catch(err => console.log(err))
  }

  deleteSmurf = id => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => { this.setState({ smurfs: res.data }) })
      .catch(err => console.log(err))
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route path="/smurfs-form" render={props => (
          <SmurfForm {...props} addNew={this.addSmurf}/>
        )} />
        <Route exact path="/" render={props => (
          <Smurfs {...props} deleteSmurf={this.deleteSmurf} smurfs={this.state.smurfs} />
        )} />
      </div>
    );
  }
}

export default App;
