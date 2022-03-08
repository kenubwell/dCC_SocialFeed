import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import CreatePost from './Components/CreatePost/CreatePost';
import NavBar from './Components/NavBar/NavBar';
import './App.css';

function App() {

  const [posts, setPosts] = useState([{personName: 'Ken Blackwell', personPost: 'Working on the Social Feed React Project!'}]);

  function addNewPost(post){
    let tempPosts = [...posts, post]; //...is a spread operator to include the objects.  If not spread it would include the nested array
    setPosts(tempPosts);
  }

  return (
    <div>
      <div>
        <NavBar/>
      </div>
      <div className = "border-box">
        <CreatePost addNewPost={addNewPost}/>
      </div>
      <div>
        <DisplayPosts entryPosts ={posts}/>
      </div>
    </div>
    
  );
}

export default App;
