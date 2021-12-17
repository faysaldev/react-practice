// Class Component
import React,{Component} from 'react';

class Classcomponet extends Component{

 btnclick(f){
            alert(f);
        };

    render(){
       
         return <div className="text-center">
             <h1>I am from Classcomponents {this.props.name}</h1>
             <button onClick={this.btnclick.bind(this,"You are Clicked in Classcomponents Button pass Paramiter Fm")} className={this.props.btnclass}>{this.props.btnname}</button>
         </div>
    }

} 
export default Classcomponet;

// class components use in props 