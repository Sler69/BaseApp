import React, { Component } from "react"
import ReactDOM from "react-dom";

class User extends Component {

    render(){
        return (<div>LOL</div>)
    }
}

console.log("HELLOOOOO")
export default User;

const wrapper = document.getElementById("container");
console.log(wrapper)
wrapper ? ReactDOM.render(<User />, wrapper) : false;