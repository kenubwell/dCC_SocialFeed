import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import CreatePost from './Components/CreatePost/CreatePost';

function App() {

  const [posts, setPosts] = useState([{personName: 'Ken', personPost: 'Working on the Social Feed React Project'}]);

  function addNewPost(post){
    let tempPosts = [...posts, post]; //...is a spread operator to include the objects.  If not spread it would include the nested array
    setPosts(tempPosts);
  }

  return (
    <div>
      <CreatePost addNewPost={addNewPost}/>
      <DisplayPosts entryPosts ={posts}/>
    </div>
    
  );
}

export default App;
