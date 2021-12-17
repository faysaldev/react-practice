import React, { Component } from 'react';

class MultipulInput extends Component {

    constructor(){
        super();
        this.state={
            username: "",
            email: "",
            password: ""
        }
    }

    Changehandaler=(event)=>{
        var myname = event.target.name;
        var myvalue =event.target.value;
        this.setState({[myname]:myvalue});

        if(myname==="username"){
            var Inputpattan =/^([a-zA-Z ]){2,30}$/;
            if(!Inputpattan.test(myvalue)){
                this.setState({username:"Please Make sure writing String"});
            }
        }

        if(myname==="email"){
            var Inputpattan =/\S+@\S+\.\S+/;
            if(!Inputpattan.test(myvalue)){
                this.setState({email:"Email is Not Valid"});
            }
        }

        if(myname==="password"){
            var Inputpattan =/^([a-zA-Z ]){2,30}$/;
            if(!Inputpattan.test(myvalue)){
                this.setState({password:"Please Make sure writing String"});
            }
        }

    }
//  i use the from validation React pattan

    OnsubmitHandaler=()=>{
        alert(this.state.username+" "+this.state.email+" "+this.state.password);
 
    }


    render() {
        return (
            <div className='text-center p-5 container'>
                <h3>My Second From</h3>
                <p>{this.state.username}</p><br/>
                <p>{this.state.email}</p>
                <p>{this.state.password}</p>
                <form onSubmit={this.OnsubmitHandaler}>
                    <input onChange={this.Changehandaler} type="text" name="username" placeholder="Username" className="form-control"/><br/>
                    <input onChange={this.Changehandaler} type="email" name="email" placeholder="Email Address" className="form-control"/><br/>
                    <input onChange={this.Changehandaler} type="password" name="password" placeholder="Your Password" className="form-control"/><br/>
                    <input type="submit" value="Send"/>

                </form>
            </div>
        );
    }
}

export default MultipulInput;