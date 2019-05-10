import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const NavBar = props => {
    return(
        <div>
            <NavLink activeClassName="nav-active" className="navbar" exact to='/'>Village</NavLink>
            <NavLink activeClassName="nav-active" className="navbar" to='/smurfs-form'>Add Smurf</NavLink>
        </div>
    );
}

export default NavBar;