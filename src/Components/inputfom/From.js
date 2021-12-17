import React, { Component } from 'react';
import ReactDom from 'react-dom';

class From extends Component {

    constructor(){
        super();

        this.state={
            name:" "
        }

    }

    changehander=(event)=>{
        var Username =event.target.value;
        this.setState({name: Username});
    }

    render() {
        return (
            <div className="text-center p-5"><br/><br/>
                    <p>Write Your Name</p><br/>
                     <p>{this.state.name}</p><br/> 
                <form>
                    <input onChange={this.changehander} className="form-control" type="text" placeholder="Write Your Name"/><br/>
                    <input value="Submit" type="submit"/>
                </form>
            </div>
        );
    }
}

export default From;