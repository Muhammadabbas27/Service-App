import React, { Component, Fragment } from 'react';
import './App.css';

class LoginPage extends Component{
    constructor(props){
        super(props);
        this.state = {
                email:"rizviabbas24@gmail.com",
                Password: "1234567890"
            };
    }

    handlechanged = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handlesubmit = (e) => {
        alert(`my name is ${this.state.email}`);
        e.preventDefault();
    }

    render(){
        return(
            <Fragment>
            <h1 id="heading">Welcome to Login Page</h1>

            <div className="container">
           
             <form onSubmit={this.handlesubmit}>

             {/* For Email Address */}
             <div className="row">
                 <div className="col-25">
                  <label>E-Mail Address</label>
                 </div>
                 <div className="col-75">
                   <input type="email" name="email" placeholder="abc@email.com"
                          onChange={this.handlechanged} />  
                 </div>
             </div>

                 {/* For Password */}
                 <div className="row">
                     <div className="col-25">
                         <label>Password</label>
                     </div>
                     <div className="col-75">
                         <input type="password" name="Password" placeholder="password"
                                onChange={this.handlechanged} /><br />
                         <br />  
                         <input type="checkbox" value="Remember Me" />
                         <label>&nbsp;&nbsp;Remember Me</label>
                     </div>
                 </div>
                  
                  <div className="col-74">
                  <button type="submit" className="btn btn-primary">Login</button>
                   <a href="#" className="btn btn-link">Forgot Your Password</a>
                   </div>
               </form> 
                            
            </div>
        </Fragment>     
        );
    }
}

export default LoginPage;