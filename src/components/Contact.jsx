import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact d-flex flex-column justify-content-center align-items-center gap-3">
        <h1 className="contactHeading">Lets work together.</h1>
        {/* <div> */}
            <div className="d-flex flex-column justify-content-center align-items-center">
            <span className="contactSubHeading">Email Address </span>
            <p className="contactData">alishasatheesan1992@gmail.com</p>
            </div>
            
            <div className="d-flex flex-column justify-content-center align-items-center">
            <span className="contactSubHeading">Phone Number </span>
            <p className="contactData">+971 502987515</p>
            </div>

            <div className='d-flex justify-content-between' style={{width: 50}}>
              <a style={{color: '#347571'}} href='https://www.linkedin.com/in/alishakiran/' target='_blank'><FaLinkedin/></a>
              <a style={{color: '#347571'}} href='https://github.com/Alisha1Kiran' target='_blank'><FaGithub /></a>
            </div>

        {/* </div> */}
    </div>
  )
}

export default Contact