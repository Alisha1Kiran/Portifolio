import React from 'react'
import MyPic from './../assets/images/mypic.png'

const Aboutme = () => {
  return (
    <section className="aboutBody">
        <div className="d-flex flex-column justify-content-lg-end align-items-lg-center justify-content-sm-center align-items-sm-center aboutDetails">
            <img className="myPic" src={MyPic} style={{height: 250, width: 270}}/>
            <h1 className="mainTitle">I'm Alisha Kiran</h1>
            <h3 className="subTitle">Front End Developer</h3>
            <p className="aboutMe">I'm a 5 year experienced software engineering, dedicated to front-end development for MOH Dubai's Smart Service project for last 4 years.
            I create responsive, user-friendly web solutions, Skilled in quick problem-solving and integrating advanced services.
            I’m passionate about problem-solving and continuously advancing my skills to meet new tech challenges.
            </p>
        </div>
    </section>
  )
}

export default Aboutme
