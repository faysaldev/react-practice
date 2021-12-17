import React, { Component } from 'react';

class SelectOp extends Component {

    constructor(){

        super();
        this.state={
            value: "",
        }

    }

    Changehandaler=(event)=>{

        var SelectValue =event.target.value;
        this.setState({value: SelectValue})


    }

    render() {
        return (
            <div className="container text-center p-5">
                <p>{this.state.value}</p>
               <select onChange={this.Changehandaler}>
                <option selected>Select Division</option>  
                <option>Dhaka </option>  
                <option>Barisal </option>  
                <option>Khula </option>  
                <option>Rangpur </option>  
                </select> 
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        );
    }
}

export default SelectOp;