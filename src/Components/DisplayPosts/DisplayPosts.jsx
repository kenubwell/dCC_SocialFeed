import React from "react";

const DisplayPosts = (props) => {
    return (  
        <div className='postsBorder'>
        {props.entryPosts.map((post, index) => { //use curly brackets to write JavaScript within HTML. The index will iterate the index values (Note it starts at 0)
        return (
            <div key = {index}>
                <div><p>{post.personName}</p></div>
                <div><p>{post.personPost}</p></div>
                <div>Place Holder: Thumbs up/Thumps down</div>
            </div>
        )
        })}
        </div>   
    );
}

export default DisplayPosts;