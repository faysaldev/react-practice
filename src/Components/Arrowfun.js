import React from 'react';


// global alert function
const Arrowclick=(f)=>{
    alert(f);
}


// normal function 

function Normalfun(){
    return (<div className="container">
        <div className="row">
            <div className="col-md-12 text-center p-5">
                    <h3>I am Normal function.This is Arrow function File</h3>
                    <a onClick={Arrowclick.bind(this,"you are click the arrow function button.Fm")} className="btn btn-light" target="_blank" href="https://www.facebook.com/faysalahmed.munna.758/">My Facebook</a>
            </div>
        </div>
    </div>);
}


// arrow function



const Arrowfun=()=>{
    return (<div className="container">
    <div className="row">
        <div className="col-md-12 text-center p-5 bg-primary">
                <h3>I am Arrow function.Ok Dear Fm.</h3>
                <a onClick={Arrowclick.bind(this,"you are click the arrow function button.Fm")} className="btn btn-light" href="https://www.facebook.com/faysalahmed.munna.758/" target="_blank">My Facebook</a>
        </div>
    </div>
</div>);
}





export default Arrowfun;

