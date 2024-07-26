import React from 'react'
import logo from "../Assets/logo.png"
import "./Navbar.css"
function Navbar() {
  return (
    <nav className='nav1'>
<ul>
      <div className="img">
        <img src={logo} alt="" />
      </div>

      <div className="elem">
        <p>Internships<i class="bi bi-caret-down-fill"></i></p>
        <p>Jobs<i class="bi bi-caret-down-fill"></i></p>
      </div>

      <div className="search">
      <i class="bi bi-search"></i>
        <input type='text' placeholder='Search'></input>
      </div>

      <div className="auth">
        <button className='auth1'>Login</button>
        <button className='auth2'>Register</button>
      </div>
      
       <div id='hire' className="flex mt-7">
        Hire Talent
       </div>

       <div className="admin">
        <button>Admin</button>
       </div>

      </ul>
    </nav>
  )
}

export default Navbar
