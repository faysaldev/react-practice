import React, { Component } from 'react';
import ReactDom from 'react-dom';

class Finddomenote extends Component {

    changeimg(){

        var img =document.querySelector(".img-fluid");
        var ch =function () {<div><img></img></div> };
        ReactDom.findDOMNode(img).src="https://scontent.fdac24-1.fna.fbcdn.net/v/t1.0-9/122768381_184643593156419_3871506712432009405_n.jpg?_nc_cat=109&ccb=3&_nc_sid=e3f864&_nc_ohc=t9UtG2ckxxgAX8JgiR2&_nc_ht=scontent.fdac24-1.fna&oh=f1f5857c509fbc11cbd30cc7fe9b94e0&oe=6060C118";

    }

    render() {
        return (
            <div className='container' style={{width:'100%'}}>
                <button onClick={this.changeimg} className="btn btn-outline-secondery">Change Img</button><br/>
                <img className="img-fluid" src="https://scontent.fdac24-1.fna.fbcdn.net/v/t1.0-9/122897610_184652873155491_7119580501547001378_o.jpg?_nc_cat=104&ccb=3&_nc_sid=09cbfe&_nc_ohc=xH3-VuLPNREAX9cAayl&_nc_ht=scontent.fdac24-1.fna&oh=730b5e515fed0fd9e7df2bbc46fcd362&oe=6062539A"></img>
            </div>
        );
    }
}

export default Finddomenote;