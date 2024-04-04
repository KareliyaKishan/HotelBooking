import React from 'react'
import "./header.css";
import { useNavigate } from "react-router-dom";


const Header2 = () => {
    
  const navigate = useNavigate();

  const home = () => {
    navigate("/home");
  }
  const about = () => {
    navigate("/about");
  }
  const contact = () => {
    navigate("/contact");
  }
 

  return (
    <div className="header">
        <div className="headerList">
          <div className="headerListItem active">
            <span onClick={home}>Home</span>
          </div>
          <div className="headerListItem active">
            <span onClick={about}>About</span>
          </div>
          <div className="headerListItem active">
            <span onClick={contact}>Contact</span>
          </div>
         
        </div>
    </div>
  )
}

export default Header2