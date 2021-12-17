import React,{Component} from 'react';

class Refresh extends Component{

    constructor(){

        super();

        this.RefreshNow=this.RefreshNow.bind(this);

    }

    RefreshNow(){

        this.forceUpdate();

    }


    render(){
        return(<div className="text-center p-5">
            <h1 title="Click The text">Faysal{Math.random()}</h1><br />
            <button onClick={this.RefreshNow} className="btn btn-outline-danger">Refresh</button>
        </div>);
    }

}

export default Refresh;
