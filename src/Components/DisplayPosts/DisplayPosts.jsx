import React from "react";
import './DisplayPosts.css';

const DisplayPosts = (props) => {
    return (  
        <div className = 'container'>
        {props.entryPosts.map((post, index) => { //use curly brackets to write JavaScript within HTML. The index will iterate the index values (Note it starts at 0)
        return (
            <div className = 'post-border' key = {index}>
                <div><p className = 'post-name'>{post.personName}</p></div>
                <div><p className = 'post-content'>{post.personPost}</p></div>
                <div>Place Holder: Thumbs up/Thumps down</div>
            </div>
        )
        })}
        </div>   
    );
}

export default DisplayPosts;