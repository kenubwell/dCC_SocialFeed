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
        props.addNewPost(newPost);
        setName(""); //this is to clear the text that was entered in the form
        setPost(""); //this is to clear the text that was entered in the form
    }

    return (  

    //contains boostrap css classes
   <form onSubmit = {handleSubmit} className = 'form-grid'>
        <div className = 'form-group'>
            <label for = 'Name'>Name</label>
            <input type = 'text' id = 'Name' className = 'form-control' style={{'width':'400px'}} value={personName} onChange={(event) => setName(event.target.value)}/> 
        </div>
        <div>
            <label for = 'Post'>Post</label>
            <input type = 'text' id = 'Post' className = 'form-control' style={{'width':'600px', 'padding':'20px 5px'}} value = {personPost} onChange={(event) => setPost(event.target.value)}/>
        </div>
        <button type = 'submit' className = "btn btn-primary" style={{'margin-top':'1em'}}>Create</button> 
    </form>
   

    );
}



 
export default CreatePost;