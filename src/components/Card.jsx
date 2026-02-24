  import React from 'react'; 
import App from '../App';



function Card ({children,className, ...props}) {

  return(
      <>
      
    <div className={`flex flex-col 
       ${className}`} >
     <h1 className='card-title'>{props.title}</h1>
          
          {children }
        
        </div>
  

      </>
    
    )
   
  
};

export default Card