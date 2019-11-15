import React, {useState, useEffect} from 'react';
import Blogers from './Blogers';
import "./blogers.css"



const BlogersContainer = () =>{
    const [data, setData] = useState([])
    useEffect(()=>{
      fetch("https://5d8e0901370f02001405c7c9.mockapi.io/api/v1/postblog/users" )
        .then(function (response) { 
          return response.json()
          })
          .then(function (data) { 
            return  setData(data)
           
        });
    },[])
    console.log(data)
    return(
       <div className="blogers">
           <h2>Blogers</h2>
        <Blogers   data={data}/>
       </div>
    )
}

export default BlogersContainer;