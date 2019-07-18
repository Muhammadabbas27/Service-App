import React, { Component, Fragment } from "react";
import './App.css';

class Student extends Component{
    constructor(props){
      super(props);
      this.state = {
                  username:"",
                  emailaddress:"",
                  password:"",
                  confimpassword:"",
                  mobile:""   
      };
    }

    handlechange = (e) => {
      this.setState({[e.target.name]: e.target.value});
    }

    handlesubmit = (e) =>{
      alert(`My name is ${this.state.username}.
             email is ${this.state.emailaddress}.
             and password is ${this.state.password}.
             or confirm password is ${this.state.confimpassword}.
             and mobile number is ${this.state.mobile}`
      );
      e.preventDefault();
    }  

    render(){
        return(
          <Fragment>
            <h1 id="heading">Welcome to Registration Page</h1>
            <div className="container">

                    <form onSubmit={this.handlesubmit}>
                    {/* For Name */}
                <div className="row">
                   <div className="col-25">
                       <label>Name</label>
                    </div> 
                    <div className="col-75">
                        <input type="text" name="username" placeholder="Your's name"
                               onChange={this.handlechange} />
                    </div>
                </div>

                    {/* For Email Address */}
                <div className="row">
                   <div className="col-25">
                       <label>Email Address</label>
                  </div> 
                  <div className="col-75">
                    <input type="email" name="emailaddress" placeholder="abc@email.com"
                           onChange={this.handlechange} />
                  </div>   
                </div>    

                   {/* For Password  */}

                   <div className="row">
                   <div className="col-25">
                       <label>Password</label>
                  </div> 
                  <div className="col-75">
                    <input type="password" name="password" placeholder="Password"
                           onChange={this.handlechange} />
                  </div>   
                </div>

                    {/* Confirme Password */}

                    <div className="row">
                   <div className="col-25">
                       <label>Confirme Password</label>
                  </div> 
                  <div className="col-75">
                    <input type="password" name="confimpassword" placeholder="Confirm Password"
                           onChange={this.handlechange} />
                  </div>   
                </div>

                  {/* For mobile number */}

                  <div className="row">
                   <div className="col-25">
                       <label>Password</label>
                  </div> 
                  <div className="col-75">
                    <input type="password" name="mobile" placeholder="Mobile Number"
                            onChange={this.handlechange} />
                  </div>   
                </div>

                  {/* For Register Button */}
                  <br />                    
                  <input type="submit" value="Register" />
                  
                </form>    
            </div>
            </Fragment>
        );
    }
}


export default Student;