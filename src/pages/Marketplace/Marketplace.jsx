  //exe
  import React from "react";
  import { Link } from "react-router-dom";
  import Fade from "react-reveal/Fade";
 

  //inter
 
  import Footer from "../../layout/Footer/Footer";
  

  //Assest
  
  
    function Marketplace() {
    return (
      
      <div className="character-cont cont">
        <div className="shadow-char"></div>
        <div className="shadow-char"></div>
        <div id="collection" className="character">
       
        
        <div className="btn-div">
            <Link to="/" className="rent">
                Home
              </Link>
            </div>
          
          <div>
            <h1>The Marketplace Of The Gods</h1>
          </div>
          
        </div>
        <Footer/>
      </div>
    );
  }
  
  
export default Marketplace