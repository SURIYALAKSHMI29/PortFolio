import React from "react"
import "./Contact.css"
import theme_pattern from "../../../assets/theme_pattern.png"

const Contact = ({ className }) => {
    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "d841990d-3fbc-48af-8168-d5b063a1cdf8");
    
        try{
            const response = await fetch("/api/submit", {
            method: "POST",
            body: formData,
            mode: "no-cors"
            });
        
            const data = await response.json();
        
            if (data.success) {
                setResult("Form Submitted Successfully");
                event.target.reset();
            } else {
                console.log("Error", data);
                setResult(data.message);
            }
            setTimeout(() => {
                setResult("");
            }, 5000);
        }
        catch (error) {
            console.error("Submission error:", error);
            setResult("refer chatgpt.Failed to submit the form. Please check your network and try again.");
            setTimeout(() => {
                setResult("");
            }, 5000);
        }
      };

    return (
        <div className={`contact ${className}`} id="contact"> 
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I am currently available and looking to collaborate on exciting new projects. I am very open to opportunities to apply my skills, and to learn and grow, while delivering value to your team. Let's build something amazing together! </p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/email.png"/>
                            <p>suriyalakshmi413@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/github.png" alt="GitHub Icon"/>
                            <p><a href="https://github.com/SURIYALAKSHMI29" target="_blank">SURIYALAKSHMI29</a></p>
                        </div>
                        <div className="contact-detail">
                            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/map-marker.png" alt="Location Icon"/>
                            <p>Madurai, TamilNadu</p>
                        </div>
                    </div>
                </div>

                <form className="contact-right" onSubmit={onSubmit}>
                    <label htmlFor='name'>Your Name</label>
                    <input type ="text" placeholder="Enter your name" name='name'/>
                    <label htmlFor="email">Email</label>
                    <input type ="email" placeholder="Enter your email" name='email'/>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" rows="8" placeholder="Your Message goes here"></textarea>
                    <button className="contact-submit" type="submit">Submit now</button>
                    <span className="contact-result">{result}</span>
                </form>

                
            </div>
            
        </div>
    )
}   

export default Contact