import React, {useState,useEffect} from 'react';
import Login from "./Login"


const LoginContainer = () => {

    const example = {
        password : "",
        email : ''
      }

      const [state, setState] = useState({...example});

      const submit = (data) =>{
        console.log(data)
        setState(data)
         console.log(state)
         fetch( 
            'https://it-blog-posts.herokuapp.com/api/people/login',
            {
              method: "POST", 
              body: JSON.stringify(data), 
              headers: {
                'Content-Type': 'application/json' 
              }
            }
          )
          .then(response => {
             if(response.status === 200){
                 window.open('/workspace')
             }
          })
          .catch(function (err) {
            console.log("Error", err);
          });
      }

    
    return(
   <Login example={example} submit={submit}/>
    )
}

export default LoginContainer;