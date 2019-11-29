import React from 'react';
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="Landing">
      <div className='landing_image'></div>
        <div className='proceed'>  <Link to="/login"><button className='click'> proceed </button></Link>  </div>
    </div>
  );
}

export default Landing;
