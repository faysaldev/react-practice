import React,{useState} from 'react';

const Hook = () => {

    const [name,setname]=useState({
        castomvalue:''
    })

    const changeHandler=(event)=>{

        const targetvalue=event.target.value;
        setname({castomvalue:targetvalue});
    }

    const clickHandler=()=>{
        setname({castomvalue:"Faysal Mridha Write By Hooks"});
    }

    return (
        <div>
            <p>{"By using Hooks "+name.castomvalue}</p>
            <input type="email" placeholder="Enter Email" onChange={changeHandler}/>
            <button onClick={clickHandler}>Click And Change Name</button>
        </div>
    );
};

export default Hook;