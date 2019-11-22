import React from 'react';
import './post.css'



const Posts = (props) => {
    const {data} = props;
    return(
       <div>
        {
            data.map((item)=>{
             return   <div className='item' key={item.id}>
                <div className='title'> <p>{item.author}</p>  <p>{item.title}</p>   </div>
                <div className='discription'> {item.description}</div>
                </div>
            })
        }
       </div> 
    )
}


export default Posts;