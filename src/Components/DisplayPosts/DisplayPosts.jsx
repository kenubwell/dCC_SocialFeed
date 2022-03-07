import React from "react";

const DisplayPosts = (props) => {
    return (  
        <table className='table'>
        <thead>
            <tr>
            <th>Name</th>
            <th>Post</th>
            <th>Like/Dislike</th>
            </tr>
        </thead>
        <tbody>
        {props.entryPosts.map((post, index) => { //use curly brackets to write JavaScript within HTML. The index will iterate the index values (Note it starts at 0)
        return (
            <tr key = {index}>
            <td>{post.personName}</td>
            <td>{post.personPost}</td>
            <td>Pending</td>
            </tr>
        )
        })}
        </tbody>
        </table>   
    );
}

export default DisplayPosts;