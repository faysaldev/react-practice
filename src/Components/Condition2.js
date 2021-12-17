import React,{Component} from 'react';


//actually this is variables condition
class Condition2 extends Component{

    constructor(){
        super();
        this.state={
            fname:"Faysal",
            lname:"Mridha"

        }
    }

    render(){

        return(
            this.state.fname==="Faysal"&& this.state.lname==="Mridha"? <h1 title="This is Variables Condition" className="text-center p-5">This is True Portion</h1> : <h1 className="text-center p-5">This is False Portion</h1>
            );

    }

}



export default Condition2;