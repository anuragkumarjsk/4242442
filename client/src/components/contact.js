import React, { Component } from 'react'
import axios from 'axios'
import './components.css'

 class contact extends Component {
    state={
          name:'',
          gender:'',
          email:'',
          phone:'',
          organization:''
    }
    namechange=(e)=>{this.setState({name:e.target.value})}
    genderchange=(e)=>{this.setState({gender:e.target.value})}
    emailchange=(e)=>{this.setState({email:e.target.value})}
    phonechange=(e)=>{this.setState({phone:e.target.value})}
    organizationchange=(e)=>{this.setState({organization:e.target.value})}

    getformdata=(e)=>{
      e.preventDefault()
      const payload=this.state
      axios.post("/candidates/add",payload)
      .then(()=>{console.log('data added successfully')})
      .catch((err)=>{console.log('couldnot add candidate data to the db : '+err)})
    }
    render() {
        return (
            <div>
                contact page
                <form className="formstyle" >
                <label htmlFor="name">Name : </label>    
                <input id="name" name="name" type="text" onChange={this.namechange}/><br/>

                <label htmlFor="gender">Gender : </label>    
                <input id="gender" name="gender" type="text" onChange={this.genderchange}/><br/>

                <label htmlFor="email">Email : </label>    
                <input id="email" name="email" type="text" onChange={this.emailchange}/><br/>

                <label htmlFor="phone">Phone : </label>    
                <input id="phone" name="phone" type="text"onChange={this.phonechange} /><br/>

                <label htmlFor="organization">Organization : </label>    
                <input id="organization" name="organization" type="text" onChange={this.organizationchange} /><br/>
                <button onClick={this.getformdata}>submit</button>
                </form>
            </div>
        )
    }
}



export default contact;