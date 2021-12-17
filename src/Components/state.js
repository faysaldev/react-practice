import React,{Component} from 'react';

class Statetry extends Component{


    // another way
    // var obj={
    //     name : "Fm Faysal Mridha",
    //     age :16,   ages : [16,18,21], // array in middle keep the arry.. and acces the array value this.state.ages[0];

    // };
    // this is state
    constructor(){
        super();

        this.state={
            name : "Fm Faysal Mridha",
            age : 16,
            school :{
                class5: "22 No Middle Kaliya govt primary school",
                class10: "Indurkani M.U moddel High school",
                class12: "Barisal Polytaknick Institude"
            }
        }
    }
    
    render(){
        return(<div className="container">
            <div className="row">
                <div className="col-md-12">
            <h1 className="text-center p-5" style={{background: "black",color: "white"}} >{this.state.name+ " By State in react"}</h1>
            <h3 className="text-center p-5"style={{fontWeight:"bold"}} >{"My age is "+this.state.age}</h3>
            <h3 className="text-center p-5"style={{fontWeight:"bold"}} >{"When I study 12 : "+this.state.school.class12}</h3>
                </div>
            </div>
        </div>);
    }

}

export default Statetry;