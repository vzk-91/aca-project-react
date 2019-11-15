import React from 'react';
import './post.css'



const Posts = (props) => {
    const {data} = props;
    return(
       <div>
        {
            data.map((item)=>{
             return   <div class='item'>
                <div class='title'> <p>{item.author}</p>  <p>{item.title}</p>   </div>
                <div class='discription'> {item.description}</div>
                </div>
            })
        }
       </div> 
    )
}


export default Posts;