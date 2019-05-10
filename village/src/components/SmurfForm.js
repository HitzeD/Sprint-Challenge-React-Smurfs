import React, { Component } from 'react';
import styled from 'styled-components';

{/* styles below */}


const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 100px;
`
const StyledInput = styled.input`
  width: 30%;
  border: 1px solid black;
  margin: 10px;
  border-radius: 10px;
  padding: 10px;
`

const Button = styled.button`
  background-color: dodgerblue;
  border-radius: 10px;
  padding: 5px;
`

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    this.props.addNew(this.state);
    // add code to create the smurf using the api

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <Form onSubmit={this.addSmurf}>
          <StyledInput
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <StyledInput
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <StyledInput
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <Button type="submit">Add to the village</Button>
        </Form>
      </div>
    );
  }
}

export default SmurfForm;
