import React from 'react';
import '../styles/FooterNew.css';
//import { Button } from './Button';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import CircleIcon from '@mui/icons-material/Circle';
import {useCookies} from "react-cookie";

function FooterNew() {

  const [,setCookies]=useCookies(["access_token"]);

  const logout=()=>{
    setCookies("access_token","");
    window.localStorage.removeItem("userID");
  };

  return (
    <div className='footerContainer'>
      <div class='footerLinks'>
        <div className='footerLinkWrapper'>
          <div class='footerLinkItems'>
            <h2>Quick Links</h2>
            <Link to='/'> <CircleIcon class='footerCircleIcon'/> Home </Link>
            <Link to='/lessons'> <CircleIcon class='footerCircleIcon'/> Lessons </Link>
            <Link to='/exercises'> <CircleIcon class='footerCircleIcon'/> Exercises </Link>
            <Link to='/quizes'> <CircleIcon class='footerCircleIcon'/> Quizes </Link>
            <Link to='/courses'> <CircleIcon class='footerCircleIcon'/> Courses </Link>
          </div>
          <div class='footerLinkItems'>
            <h2>Extra Links</h2>
            <Link to='/login'> <CircleIcon class='footerCircleIcon'/> Log In </Link>
            <Link to='/signup'> <CircleIcon class='footerCircleIcon'/> Sign Up </Link>
            <Link to='/'onClick={logout}> <CircleIcon class='footerCircleIcon'/> Log Out </Link>
          </div>
        </div>
        <div className='footerLinkWrapper'>
          <div class='footerLinkItems'>
            <h2>Follow Us</h2>
            <Link to='/'> <InstagramIcon class='footerIcon'/> Instagram </Link>
            <Link to='/'> <FacebookIcon class='footerIcon'/> Facebook </Link>
            <Link to='/'> <LinkedInIcon class='footerIcon'/> LinkedIn </Link>
            <Link to='/'> <TwitterIcon class='footerIcon'/> Twitter</Link>
          </div>
          <div class='footerLinkItems'>
            <h2>Contact Us</h2>
            <Link to='/'> <EmailIcon class='footerIcon'/> mathlog@gmail.com </Link>
            <Link to='/'> <PhoneIcon class='footerIcon'/> +94785767025 </Link>
          </div>
        </div>
      </div>
          
      <div className='footerLine'>
        <div class='websiteRights'> © 2023 mathlog.com </div>
      </div>
    </div>
  );
}

export default FooterNew;