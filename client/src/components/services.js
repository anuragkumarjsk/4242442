
import React, { Component } from 'react'
import axios from 'axios';

import cred from './cred'
 class services extends Component {

    state = {
        data:[],
        delete_id:'',
        isloggedin:false,
        showlogin:true,
        uname:"",
        pass:""
    }
    handlepwd=(e)=>{this.setState({pass:e.target.value})}
    handleusr=(e)=>{this.setState({uname:e.target.value})}
    rowdelete=(e)=>{this.setState({delete_id:e.target.value})}
    checkpwd=()=>{
       
        if(this.state.uname === cred.UNAME && this.state.pass === cred.PASS )
        {
          this.setState({showlogin:false , isloggedin:true})
        }
        else
        {
            alert('wrong username or password')
        }
    }
    componentDidMount()
    {
    
        axios.get('http://localhost:4000/candidates')
        .then((result)=>{
            console.log('success fully retrieved data')
            this.setState({data:result.data})
        })
        .catch((err)=>{console.log('error retrieving records : '+err)})
    }

    delete_record=(e)=>{
        e.preventDefault()
        var id = this.state.delete_id
        axios.delete(`http://localhost:4000/candidates/delete/${id}`)
        .then(()=>{console.log(id+' deleted successfully')})
        .catch(()=>{console.log('unablel to delete id')})
    }

    render() {
        return (
            <div>     
             {this.state.showlogin && 
             <div>
                 <h2>To see the data entered so far please enter the username and password</h2>
             <div className="formcard"> 
                 username:<input type="text"   onChange={this.handleusr}/><br/>
                 password:<input  type="password" onChange={this.handlepwd} /><br/>
                 < button className="btn" onClick={this.checkpwd}>submit</button>
             </div></div>
             }   

             {this.state.isloggedin && <table className="table">
                <thead>
                <tr>
                <th>Ref Id</th>
                <th>Name</th>
                <th>Semester</th>
                <th>Email</th>
                <th>Mobile No</th>
                <th>Organization</th>
                <th>Timestamp</th>
                </tr>
                </thead>
                <tbody>
                
                    {
                    this.state.data.map((rows)=>{
                        return (
                        // <tr key={rows.id} onClick={this.handlerecordclick}>  
                        <tr key={rows.id}>
                        <td>{rows._id}</td>
                        <td>{rows.name}</td>
                        <td>{rows.semester}</td> 
                        <td>{rows.email}</td> 
                        <td>{rows.phone}</td>
                        <td>{rows.organization}</td>
                        <td>{rows.timestamp}</td>
                        </tr>
                        );
                    })}

                </tbody>
            </table>
            }



            { this.state.isloggedin && <div>
            <nav class="navbar fixed-bottom navbar-light bg-dark">
            <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="enter the record id here" aria-label="Search" value={this.state.delete_id} onChange={this.rowdelete}/>
                <button className = "btn-danger  my-sm-0" style={{borderRadius:"6px"}} onClick={this.delete_record} >Delete by Id</button>
            </form>
            </nav>
            </div>
            }

           </div>     
        )
    }
}
export default  services