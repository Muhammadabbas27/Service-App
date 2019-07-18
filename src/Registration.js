import React, { Fragment } from 'react';
import './App.css';

class Regster extends React.Component{
    render(){
        return(
            <Fragment>
                <form >
                    {/* For Name */}
                <div className="row">
                   <div className="col-25">
                       <label>Name</label>
                    </div> 
                    <div className="col-75">
                        <input type="text" />
                    </div>
                </div>

                    {/* For Email Address */}
                <div className="row">
                   <div className="col-25">
                       <label>Email Address</label>
                  </div> 
                  <div className="col-75">
                    <input type="email" />
                  </div>   
                </div>    

                   {/* For Password  */}

                   <div className="row">
                   <div className="col-25">
                       <label>Password</label>
                  </div> 
                  <div className="col-75">
                    <input type="password" />
                  </div>   
                </div>

                    {/* Confirme Password */}

                    <div className="row">
                   <div className="col-25">
                       <label>Confirme Password</label>
                  </div> 
                  <div className="col-75">
                    <input type="password" />
                  </div>   
                </div>

                  {/* For Register Button */}

                    
                  <input type="submit" value="Register" />
                  
                </form>
                
                       
                  
            </Fragment>
        );
    }
}

export default Regster;