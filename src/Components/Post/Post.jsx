import React, { useState } from 'react';
import {GoThumbsup, GoThumbsdown} from 'react-icons/go';
import './Post.css';


const Post = (props) => {

    const [thumbsUpClass, setThumbsUp] = useState('inactive');
    const [thumbsDownClass, setThumbsDown] = useState('inactive2');

    function handleClick(){
        if(thumbsUpClass === 'inactive' && thumbsDownClass === 'inactive2'){
            setThumbsUp('active');
        }
        else if (thumbsUpClass === 'inactive' && thumbsDownClass === 'active2'){
            setThumbsUp('active');
            setThumbsDown('inactive2')
        }
        else{
            setThumbsUp("inactive");
        }

    }

    function handleSecondClick(){
        if(thumbsDownClass === 'inactive2' && thumbsUpClass === 'inactive'){
            setThumbsDown('active2');
        }
        else if (thumbsDownClass === 'inactive2' && thumbsUpClass === 'active'){
            setThumbsDown('active2');
            setThumbsUp('inactive');
        }
        else{
            setThumbsDown("inactive2");
        }

    }

    return (  
        <div className ='container-thumbs'>
            <div className = 'first-button'><button className = {thumbsUpClass} onClick={handleClick}><GoThumbsup/></button></div>
            <div><button className = {thumbsDownClass} onClick={handleSecondClick}><GoThumbsdown/></button></div>
        </div>
 
    );
}
 
export default Post;