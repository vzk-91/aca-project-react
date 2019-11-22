import React, {useState, useEffect} from 'react';
import './registration.css';
import Registration from "./Registration"



const RegistrationContainer = () => {

    const example = {
        lastname : '' ,
        username : '',
        password : "",
        email : ''
      }

      const [state, setState] = useState({...example});
      
      

      const submit = (data) =>{
        console.log(data)
        setState(data)
         console.log(state)
         fetch( 
             'https://it-blog-posts.herokuapp.com/api/people',
             {
               method: "POST", 
               body: JSON.stringify(state), 
               headers: {
                 'Content-Type': 'application/json' 
               }
             }

           )
           .then(function (response) {
             console.log(response.status)
           })
           .catch(function (err) {
             console.log("Error", err);
           });
      }
    
      console.log(state)
    // useEffect(()=>{
    //     console.log(state)
    //     fetch( 
    //         'https://it-blog-posts.herokuapp.com/api/people',
    //         {
    //           method: "POST", 
    //           body: JSON.stringify(state), 
    //           headers: {
    //             'Content-Type': 'application/json' 
    //           }
    //         }
    //       )
    //       .then(function (response) {
    //         console.log(response.status)
    //       })
    //       .catch(function (err) {
    //         console.log("Error", err);
    //       });
    // },[])



     

    return(
      <Registration example={example} submit={submit}/>
    )
}

export default RegistrationContainer;