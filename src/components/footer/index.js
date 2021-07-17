import React from 'react';
import "./style.css";
//import { a } from 'react-router-dom'

const Footer = () => {
    return ( 
        <section className="footer-wrapper">
            <button>JOIN THE COMMUNITY</button>
            <div>
                <h5>THE BASICS</h5>
                <li><a href="#">About TMDb</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Support Forums</a></li>
                <li><a href="#">API</a></li>
                <li><a href="#">System Status</a></li>
            </div>
            <div>
                <h5>GET INVOLVED</h5>
                <li><a href="#">Contribution Bible</a></li>
                <li><a href="#">3rd Party Applications</a></li>
                <li><a href="#">Add New Movie</a></li>
                <li><a href="#">Add New TV Show</a></li>
            </div>
            <div>
                <h5> COMMUNITY</h5>
                <li><a href="#">Guidelines</a></li>
                <li><a href="#">Discussions</a></li>
                <li><a href="#">Leaderboard</a></li>
                <li><a href="#">Twitter</a></li>
            </div>
            <div>
                <h5>LEGAL</h5>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">API Terms of Use</a></li>
                <li><a href="#">Privacy Policy</a></li>
            </div>
            
        </section>
     );
}
 
export default Footer;