import React, { Component } from 'react';
import ReactDom from 'react-dom';

class Rendertest extends Component {

    myfun(){
        var container =document.querySelector(".my");// to target the element
        var element =<div><h1>Hey! What's up? Howes going on.</h1><button className="btn btn-success">Another Button</button></div>;
        var calbk =function(){alert("Function Have been Called by Fm")}
        ReactDom.render(element,container,calbk);// i can also change the name of dom render  is hydrate .actually there are both word same
        
    }

    render() {
        return (
            <div className='my container p-5 text-center'>
                <h1>My name is Faysal</h1>
                <button onClick={this.myfun} className="btn btn-success">Click And Change</button>
            </div>
        );
    }
}

export default Rendertest;