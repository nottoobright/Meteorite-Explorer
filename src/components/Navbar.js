import React from 'react'
import '../styles/Navbar.css';

const colors = [
    '#3F51B5', //Navbar
    '#7986CB', //Button
    '#202437', //Button Text
    '#FFB564', //Table Header
    '#FAFAFA', //Deep Table
    '#282C34'  //Background
]

const Navbar = (props) => {
    return (
        <div className='f1 pa1 w-100 bg-nav'>
            <h1 className='f2 fw4 white bw0'>Meteorite Explorer</h1>
        </div>
    )
}

export default Navbar;