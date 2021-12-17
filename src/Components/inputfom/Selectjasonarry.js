import React, { Component } from 'react';


// this is actually a jason arry okk fm 

class Selectjasonarry extends Component {

    render() {

        const myarrStyle ={
            background:"green",
            color: "white",
            marginBottom:"30px"
        }

        const myarrry2 =[
            {no:"1",name:"Faysal Mridha",age:"17",sex:"Male",barthday:"2004-2-27"},
            {no:"2",name:"Alifa",age:"13",sex:"Female",barthday:"2008-5-19"},
        ];

        const userData =myarrry2.map((fm)=>{
            return <h3>{"No "+fm.no+" "+fm.name+" "+fm.age+" "+fm.sex+" "+fm.barthday}</h3>
        })

        return (
            <div className="container p-5 text-center testanothertime" style={myarrStyle}>
                {userData}
                
            </div>
        );
    }
}

export default Selectjasonarry;