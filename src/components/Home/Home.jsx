import React from 'react';
import BlogersContainer from "./Blogers/BlogerContainer";
import PostContainer from './Post/PostContainer';
import './Home.css'

const Home = () => {
    return(
        <div className="mainhome">
     <BlogersContainer  />
     <PostContainer />
     </div> 
    )
}

export default Home;