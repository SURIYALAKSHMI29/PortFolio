import React from "react";
import "./Footer.css";
import footer_logo from "../../../assets/Laksh_logo.png";

const Footer = ({ className }) => {
    return (
        <footer className={`footer ${className}`}>
            <div className="footer-icons-left">
                <a href="https://github.com/SURIYALAKSHMI29" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/ios-glyphs/30/ffffff/github.png" alt="GitHub" />
                </a>
                <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&source=mailto&to=suriyalakshmi413@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/ios-glyphs/30/ffffff/email.png" alt="Email" />
                </a>
                <a href="https://www.linkedin.com/in/suriya-lakshmi-m/" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/ios-filled/30/ffffff/linkedin.png" alt="LinkedIn" />
                </a>
            </div>
            <div className="footer-right">
                <p>&copy; 2025 Suriya Lakshmi M. All rights reserved.</p>
            </div>
        </footer>

    );
};

export default Footer;
