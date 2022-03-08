import React, { useState } from 'react';
import './CreatePost.css';

const CreatePost = (props) => {
    
    const [personName, setName] = useState(''); //state variables for the form
    const [personPost, setPost] = useState(''); //state variables for the form

    function handleSubmit(event){
        event.preventDefault(); //this prevents the page from refreshing when the submit button is pressed
        let newPost = {
            personName: personName,
            personPost: personPost
        }
        props.addNewPost(newPost);
        setName(""); //this is to clear the text that was entered in the form
        setPost(""); //this is to clear the text that was entered in the form
    }

    return (  

    //contains boostrap css classes
   <form onSubmit = {handleSubmit} className = 'container'>
        <div className = 'form-group'>
            <label for = 'Name' className = 'label-title'>Name</label>
            <input type = 'text' id = 'Name' placeholder = 'Enter Full Name' className = 'form-control' value={personName} onChange={(event) => setName(event.target.value)}/> 
        </div>
        <div>
            <label for = 'Post' className = 'label-title-post'>Post</label>
            <input type = 'text' id = 'Post' placeholder = 'Enter a Message' className = 'form-control' style={{'padding':'25px 8px'}} value = {personPost} onChange={(event) => setPost(event.target.value)}/>
        </div>
        <button type = 'submit' className = "btn btn-primary" style={{'margin-top':'1em'}}>Create</button> 
    </form>
   

    );
}



 
export default CreatePost;