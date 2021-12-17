
var date=new Date();

function Card({text,description}){
  
  function Clickme(f){
    alert (f);
    window.open("https://www.facebook.com/faysalahmed.munna.758/");
  } 

    return (
      <div className="card col-md-3">
        <h3 className="cardtitle">{text}</h3>
        <p className="carddes">{description}</p>
        <p className="date">{date.getFullYear()+"/"+date.getMonth()+"/"+date.getDay()}<br/><b>Fm</b></p>

        <button onClick={Clickme.bind(this,"Alert From functional Components Fm")} style={{background:"black",color:"white"}} className="btn btn-secondery">FuntionalComponenps</button>

      </div>
    );
  }

  export default Card;