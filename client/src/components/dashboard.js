import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import Modal from './modal'
import './components.css'
class dashboard extends Component {


    render() {
      
        return (
            <div>
               <div className="topnav">
               <Link className="active"  to="/home" >Home</Link>
                <Link to="/event" >Team</Link>
                <Link to="/courses" >Courses</Link>
                <Link to="/candidates/add" >Contact</Link>
                <Link to="/services" >Registered</Link>
                <img id='im' src='./oltu.jpg' alt='oltu logo' style={{ width :"75px", height:"35px",borderRadius:"10px" }} data-toggle="modal" data-target="#myModal" / >
                 <Modal/>
                </div>
            </div>
        )
    }
}
export default dashboard