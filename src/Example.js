import React, { Component } from "react";

// in react js best practice using function instead of class
// function Student(){
//     function handleclick(e){
//         e.preventDefault();
//         console.log("Button Clicked");
//     }
//     return(
//             <Fragment>
//                 <h1>Hello</h1>
//                 <button onClick={handleclick}>Click Me</button>
//                 <br />
//                 <a href="https://www.google.com.pk" target=" " onClick={handleclick}>Click her</a>
//                 </Fragment>
//     );
// }

// In this class we learn about update state
class Student extends Component{
    constructor(){
        super();
        this.state={
            name: "Abbas",
            roll: "31167"
        };
       // this.handleclik = this.handleclik.bind(this);
    }
    handleclik = () => {
        // setState means that over right old state any thing is assign
        //return this.setState({name: "Ali,", roll: "41132"});
        this.setState(function(state){
            console.log(state);
        });
    };
    render(){
        return(
            <div>
            <h1>Hello {this.state.name}, your roll no is {this.state.roll} </h1>
            <button onClick={this.handleclik}>Click Me</button>
            </div>
        );
    }
}

export default Student;