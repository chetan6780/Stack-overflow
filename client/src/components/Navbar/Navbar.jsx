import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/logo.png"
import search from "../../assets/search-solid.svg"
import Avatar from '../Avatar/Avatar'
import Button from '../Button/Button'
import './Navbar.css'

const Navbar = () => {

    var User = null


    return (
        <nav className='main-nav'>
            <div className="navbar">
                <Link to="/" className='nav-item nav-logo'>
                    <img src={logo} alt="logo" />
                </Link>
                <Link to='/' className='nav-item nav-btn'>About</Link>
                <Link to='/' className='nav-item nav-btn'>Products</Link>
                <Link to='/' className='nav-item nav-btn'>For Teams</Link>
                
                <form action="">
                    <input type="text" placeholder="Search..." />
                    <img src={search} alt="search" width="18" />
                </form>
                {User === null ?
                    <Link to='/Auth' className='nav-item nav-links'>Login</Link>
                    : <>
                        <Link to='/' ><Avatar>C</Avatar></Link>
                        <Button>Logout</Button>
                    </>
                }
            </div>
        </nav>
    )
}

export default Navbar