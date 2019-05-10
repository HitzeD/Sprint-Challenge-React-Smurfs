import React, { Component } from 'react';
import styled from 'styled-components';

import Smurf from './Smurf';


{/* styles below */}

const SmurfsWrapper = styled.ul`
  display: flex;
  flex-flow: row wrap;
`

class Smurfs extends Component {
  render() {
    return (
      <div>
        <h1>Smurf Village</h1>
        <SmurfsWrapper>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                deleteSmurf={this.props.deleteSmurf}
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
        </SmurfsWrapper>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
