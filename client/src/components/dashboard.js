import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import './components.css'
class dashboard extends Component {
    render() {
        return (
            <div>
               <div className="topnav">
               <Link className="active" to="/home" >Home</Link>
                <Link to="/event" >Event</Link>
                <Link to="/courses" >Courses</Link>
                <Link to="/candidates/add" >Contact</Link>
                <Link to="/services" >Services</Link>
                </div>
            </div>
        )
    }
}
export default dashboard