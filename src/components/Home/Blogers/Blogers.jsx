import React from 'react';
import './blogers.css';



const Blogers = (props) =>{
    const {data} = props;

    return(
     <div  >
         {data.map((item)=>{
          return <div className='item_bloger' key={item.id}>
           <img src={item.avatar} alt=""  className="phot" /> 
           <p> {item.name}</p>
         </div>
         })}
     </div>
    )
}

export default Blogers;