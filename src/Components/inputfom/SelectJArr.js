import React, { Component } from 'react';

class SelectJasonArr extends Component {

    // i can also use this funtion in top
    //  myfun=(f)=>{
    //      return <h1 style={{fontStyle:"italic"}}>{f}</h1>           this.myfun
    //  }


    render() {

        const mylist =["Select Your Country","Bangladsh","USA","South Arfica","India","Canada"];
        var listitem =mylist.map((f)=>{
            return <option>{f}</option>
        });

        return (
            <div className="container p-5 text-center">
                <select style={{padding:"5px",background:"#777",color:"#fff"}}>{listitem}</select>
                <ol>{listitem}</ol>
            </div>
        );
    }
}

export default SelectJasonArr;