import React, { Component } from 'react';
import axios from 'axios'

class Axios extends Component {

    constructor(){

        super();
        this.state={
            value:[]
        }

    }

    componentDidMount(){
        axios.get("https://restcountries.eu/rest/v2/all")
        .then(response=>{
            console.log(response.data)
           this.setState({value:response.data})
        })

        .catch(error=>{
            console.log(error)
        })
    }

    render() {

        const list= this.state.value;
        const countrylist =list.map(f=>{
            return <li>{f.name} And {f.capital}</li>
        })        

        return (
            <div className="container text-center p-5">
                <ol>{countrylist}</ol>
            </div>
        );
    }
}

export default Axios;