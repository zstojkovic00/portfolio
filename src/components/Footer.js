import React from "react";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

import "../styles/Footer.css";
import { useLocation } from "react-router-dom";





const Footer = () => {

const {pathname} = useLocation();

if(pathname === "/project/0" || pathname === "/project/1" || pathname === "/project/2" || pathname === "/project/3" || pathname === "/projects" || pathname === "/experience") {
    return null;
}

    return (
        <div className="footer">
            <div className="socialMedia">


                <a href = "mailto:00zeljkostojkovic@gmail.com ">
                    <EmailIcon/>
                </a>
                <a
                    href= "https://www.linkedin.com/in/zeljko-stojkovic-324331187/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <LinkedInIcon
                    />
                </a>
                <a
                    href= "https://github.com/zstojkovic00"
                    target="_blank"
                    rel="noreferrer"
                >
                    <GitHubIcon
                    />
                </a>
            </div>
            <p> &copy; 2022 Zeljko Stojkovic</p>
        </div>
    );
}

export {Footer};