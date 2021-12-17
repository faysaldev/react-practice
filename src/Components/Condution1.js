import React,{Component} from 'react';

class Condition1 extends Component{

    constructor(){
        super();
        this.state={
            fname:"Faysal",
            lname:"Mridha"

        }
    }

    render(){

        if(this.state.fname==="Faysal" && this.state.lname==="Mridha"){
            return (<div className="container">
            <div className="row">
                <div className="col-md-12">
            <h1 title="this is if else conditon" className="text-center p-5" style={{background: "black",color: "white"}} >My name is {this.state.fname +' '+this.state.lname}</h1>
                </div>
            </div>
        </div>);

        }

        else{
            return(<div className="container">
            <div className="row">
                <div className="col-md-12">
            <h1 className="text-center p-5" style={{background: "black",color: "white"}} >Nothing Found</h1>
                </div>
            </div>
        </div>)
        }



    }

}



export default Condition1;