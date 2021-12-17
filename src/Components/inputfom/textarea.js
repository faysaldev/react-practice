import React, { Component } from 'react';

class Textarea extends Component {

    constructor(){
        super();
        this.state={
            dec:"Write Your Massage!",
            userInput :""
        }
    }


    OnchangHandaler=(event)=>{

        var userinputvalue = event.target.value;
        this.setState({dec:userinputvalue})

    }

    render() {
        return (
            <div className="text-center p-5">
                <textarea onChange={this.OnchangHandaler} style={{color:"#777",width:"300px",height:"300px"}} value={this.state.dec} placeholder="Please Insert Some Text!" />
                <p>{this.state.dec}</p>
            </div>
        );
    }
}

export default Textarea;