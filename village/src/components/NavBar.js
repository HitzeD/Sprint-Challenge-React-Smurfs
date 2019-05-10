import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = props => {
    return(
        <div>
            <NavLink to='/'>Village</NavLink>
            <NavLink to='/smurfs-form'>Add Smurf</NavLink>
        </div>
    );
}

export default NavBar;