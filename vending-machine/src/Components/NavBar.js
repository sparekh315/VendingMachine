import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './NavBar.css'


class NavBar extends Component {
    render() {
        return (
            <div className='NavBar'>
                <NavLink exact activeClassName='NavBar-active' to='/'>Home</NavLink>
                <NavLink exact activeClassName='NavBar-active' to='/snack1'>Snack 1</NavLink>
                <NavLink exact activeClassName='NavBar-active' to='/snack2'>Snack 2</NavLink>
                <NavLink exact activeClassName='NavBar-active' to='/snack3'>Snack 3</NavLink>
            </div>
        )
    };
};

export default NavBar;