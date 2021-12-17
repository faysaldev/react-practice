import React, { Component } from 'react';
import axios from "axios";

class AxiosPost extends Component {

    constructor(){
        super();
        this.state={
            postdata:"",
            postresult:""
        }
    }


    ChangeHandler=(event)=>{
        const target =event.target.value;
        this.setState({postdata:target});
    }

    ClickHandler=()=>{
        axios.post('http://fmfaysal.unaux.com/faysal.php',this.state.postdata)
        .then(response=>{
            this.setState({postresult:response.data});
            alert(this.state.postresult)
        })
        .catch(error=>{
            alert("Something Went Wrong");
        })
    }

    render() {
        return (
            <div className="container p-5 text-center">
                <p>{this.state.postdata}</p>
                <input className="form-control" onChange={this.ChangeHandler} type="text" placeholder="Enter Your Name"/>
                <button onClick={this.ClickHandler}>Send</button>
            </div>
        );
    }
}

export default AxiosPost;