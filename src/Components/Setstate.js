import React,{Component} from 'react';


//set state or set the new in setstate poperty.and also pass paramiter

class Setstate extends Component{

    constructor(){
        super();
        this.state={
            fname: "Fm",
            lname: "Faysal"
        }
    }

    //change the value by setstate 
Clicktext(f,m){
return (this.setState({fname:f})+' '+this.setState({lname:m}))
}

    render(){
        return (<div className="container">
        <div className="row">
            <div className="col-md-12">
        <h1 title="Click The Text" onClick={this.Clicktext.bind(this,"Faysal" ,"mridha")} className="text-center p-5" style={{background: "black",color: "white"}} > My Name  is : {this.state.fname +' '+ this.state.lname}</h1>
            </div>
        </div>
    </div>);
    }

}


export default Setstate;