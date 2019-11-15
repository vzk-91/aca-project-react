import React from 'react';
import Header from './components/Header/Header';
import BlogersContainer from './components/Blogers/BlogerContainer';
import PostContainer from './components/Post/PostContainer';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
     <Header />
     <div className="main">
     <BlogersContainer  />
     <PostContainer />
     </div>
     <Footer/>
     
    </div>
  );
}

export default App;
