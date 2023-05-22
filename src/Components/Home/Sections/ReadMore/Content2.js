import React, { useState } from "react";
import "./ReadMore.css"
  
const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};
  
const Content2 = () => {
  return (
    <div className="container">
      
        <ReadMore>
        Endoscopy: The surgeon uses a small, flexible tube to view the nasal 
passages and adenoids on an external video screen. Imaging tests: A CT 
scanner is used to produce detailed images of the adenoids and the 
nasal cavity to check for any sign of infection. Sometimes, surgeons 
may recommend throat x rays. Magnetic resonance imaging (MRI): An 
MRI scanner creates highly detailed images of the nasal passages,
        </ReadMore>
      
    </div>
  );
};
  
export default Content2;