import React from "react";
import './NavBar.css';

const NavBar = () => {
    return (     
    <div className ="nav-background">
        <div className = "logo">
            <h1><a href="http://localhost:3000/" className = "logo-decoration">Social<small className= 'text-muted'>Feed</small></a></h1>
        </div>
        <nav>
            <li className = "navbar-list"><a href="https://github.com/kenubwell/dCC_SocialFeed" className = "navbar-ref" target="_blank">GitHub Repo</a></li>
            <li className = "navbar-list"><a href="https://www.w3.org/html/wg/wiki/Feed" className = "navbar-ref" target="_blank">What is a Feed?</a></li>
            <li className = "navbar-list"><a href="https://devcodecamp.com/" target="_blank"><img src ="/images/devCodeCamp-Logo-12W.jpeg" className = "navbar-image" alt = "devCodeCamp Logo"/></a></li>
        </nav>
    </div>

    );
}
 
export default NavBar;