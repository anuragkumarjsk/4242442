import React,{ Component } from 'react'
import axios from 'axios'


import './components.css'

 class contact extends Component {

    state={
        name:'',
        semester:'',
        email:'',
        phone:'',
        organization:''
     }

    namechange=(e)=>{this.setState({name:e.target.value})}
    semesterchange=(e)=>{this.setState({semester:e.target.value})}
    emailchange=(e)=>{this.setState({email:e.target.value})}
    phonechange=(e)=>{this.setState({phone:e.target.value})}
    organizationchange=(e)=>{this.setState({organization:e.target.value})}

    getformdata=(e)=>{
    //   e.preventDefault()
      var f1= true;
      var f2= true;
      var f3= true;
      var mp=''
      var me=''
      var bl=''
      var phoneno = new RegExp(/^\d{10}$/);
      if(!phoneno.test( this.state.phone))
      {
          f1 = false
          mp ='phone no invalid'
      }
      const  pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(this.state.email) )
      {
          f2=false
          me ='email is invalid'
      }
      if(this.state.name.length === 0 || this.state.organization.length === 0)
      {
          f3=false
          bl = 'name and organization cannot be blank'
      }
      if(!f1 ||  !f2 || !f3)
      {
          console.log('form has error :'+mp+' '+me+' '+bl )
          alert('form has error :'+mp+' '+me+' '+bl )
          this.setState({})
          return
      }

      const payload=this.state

      axios.post(`${process.env.REACT_APP_BACKEND_URL}/candidates/add`,payload)
      .then(()=>{
          console.log('data added successfully')
    })
      .catch((err)=>{console.log('couldnot add candidate data to the db : '+err)})
       
    }

    render() {
        return (
            <div>
                <p>In case of queries related to business or internship opportunities, 
                feel free to reach out to us, we will be happy to help and collaborate.</p>
            <div className="flexbox-container">
            <div className='formcard'>
                <h2>Contact Us</h2><hr/>
                <form className="formstyle" >
                <label htmlFor="name">Name : </label><br/>    
                <input id="name" name="name" type="text" onChange={this.namechange}/><br/>

                <label htmlFor="semester">Semester : </label><br/>    
                {/* <input id="semester" name="semester" type="number" onChange={this.semesterchange}/><br/> */}
                <select className="custom-select mr-sm-2" id="semester" name="semester" type="number" onChange={this.semesterchange}>
                <option value="default"> Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
                <option value="5">Five</option>
                <option value="6">Six</option>
                <option value="7">Seven</option>
                <option value="8">Eight</option>
                </select>

                <label htmlFor="email">Email : </label><br/>    
                <input id="email" name="email" type="email" onChange={this.emailchange}/><br/>

                <label htmlFor="phone">Phone : </label><br/>    
                <input id="phone" name="phone" type="number"onChange={this.phonechange} /><br/>

                <label htmlFor="organization">Organization : </label><br/>    
                <input id="organization" name="organization" type="text" onChange={this.organizationchange} /><br/>
                <button className="btn"  onClick={this.getformdata}>submit</button>
                </form>
            </div></div>
            </div>
        )
    }
}



export default contact;