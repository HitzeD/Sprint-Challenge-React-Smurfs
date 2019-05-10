import React from 'react';
import styled from 'styled-components';

{/* styles below */}

const Button = styled.button`
  background-color: red;
  border-radius: 10px;
  -webkit-box-shadow: 10px 10px 25px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 10px 25px 0px rgba(0,0,0,0.75);
  box-shadow: 10px 10px 25px 0px rgba(0,0,0,0.75);
`

const SmurfWrap = styled.div`
  border: 1px solid black;
  width: 10%;
  margin: 10px;
  padding: 10px;
  background-color: dodgerblue;
  -webkit-box-shadow: 10px 10px 25px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 10px 25px 0px rgba(0,0,0,0.75);
  box-shadow: 10px 10px 25px 0px rgba(0,0,0,0.75);
`

const Head = styled.h3`
  background-color: gray;
  color: black;
  border-radius: 10px;
  padding: 5px;
`

const InfoWrap = styled.div`
  background-color: white;
  padding: 10px;
`

class Smurf extends React.Component {
  constructor(props){
    super(props);
    console.log(this.props.deleteSmurf)
  }

  deleteSmurf = e => {
    e.preventDefault();
    this.props.deleteSmurf(this.props.id)
  }

  render(){
    return (
      <SmurfWrap>
        <Head>{this.props.name}</Head>
        <InfoWrap>
          <strong>{this.props.height} tall</strong>
          <p>{this.props.age} smurf years old</p>
          <Button onClick={this.deleteSmurf}>The Unfortunate!</Button>
        </InfoWrap>
      </SmurfWrap>
    );
  }
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

