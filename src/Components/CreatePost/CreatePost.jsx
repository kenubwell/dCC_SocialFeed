import React, { useState } from 'react';

const CreatePost = (props) => {
    
    const [personName, setName] = useState(''); //state variables for the form
    const [personPost, setPost] = useState(''); //state variables for the form

    function handleSubmit(event){
        event.preventDefault(); //this prevents the page from refreshing when the submit button is pressed
        let newPost = {
            personName: personName,
            personPost: personPost
        }
        console.log(newPost);
        props.addNewPost(newPost);
    }

    return (  

    <form onSubmit = {handleSubmit} className ='form-grid'>
        <div className = "form-group">
            <label>Name:</label>
            <input type = 'text' className = "form-control" value={personName} onChange={(event) => setName(event.target.value)}/> 
        </div>
        <div className = "form-group">
            <label>Post:</label>
            <input type = 'text' className = "form-control" value = {personPost} onChange={(event) => setPost(event.target.value)}/>
        </div>
        <button type = 'submit' className = "btn btn-primary" style={{'margin-top':'1em'}}>Create</button>
    </form>

    );
}



 
export default CreatePost;