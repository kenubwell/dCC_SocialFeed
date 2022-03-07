import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';

function App() {

  const [posts, setPosts] = useState([{personName: 'Ken', personPost: 'Doing project 9'}]);

  return (
    <div>
      <DisplayPosts entryPosts ={posts}/>
    </div>
    
  );
}

export default App;
