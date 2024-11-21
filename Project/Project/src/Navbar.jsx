import React from 'react'
import {NavLink} from 'react-router-dom'
import './style.css'
const Navbar = () => {
  return (
    <div className='cont'>
        <nav>
            <NavLink className={(e)=>(e.isActive?'red':'')} to='/'>Home</NavLink>
            <NavLink className={(e)=>(e.isActive?'red':'')} to='/Trace'>Trace</NavLink>
            <NavLink className={(e)=>(e.isActive?'red':'')} to='/Report'>Report</NavLink>
            <NavLink  className={(e)=>(e.isActive?'red':'')} to='/About'>About</NavLink>
            <NavLink  className={(e)=>(e.isActive?'red':'')}  to='/Login'>Admin</NavLink>
        </nav>
    </div>
  )
}

export default Navbar