import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import keralaTourism from './../assets/images/keralaTourism.png'
import tvmTourism from './../assets/images/tvmTourism.png'
import enquireMart from './../assets/images/enquireMart.png';

const Projects = () => {
  return (
    <div className="projectBody d-flex flex-column justify-content-center align-items-center" style={{ marginTop: 50 }}>
      <h1 className="mainTitle">Projects</h1>
      <div>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4 mx-auto">
            <ProjectCard
              src={enquireMart}
              title="EquireMart"
              desc="Product enquiry app using HTML5, CSS3, Bootstrap5, React-Bootstrap and React"
              link="https://alisha1kiran.github.io/EnquireMart/" />
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4 mx-auto">
            <ProjectCard
              src={tvmTourism}
              title="Trivandram Tourism"
              desc="Responsive web page using HTML5, CSS3, Bootstrap5"
              link="https://alisha1kiran.github.io/KERALA_TOURISM_NEW_VERSION/districts/thiruvananthapuram.html" />
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4">
            <ProjectCard
              src={keralaTourism}
              title="Kerala Tourism"
              desc="Using HTML5, CSS3"
              link="https://alisha1kiran.github.io/KERALA_TOURISM_NEW_VERSION/districts/thiruvananthapuram.html" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Projects

const ProjectCard = ({ src, title, desc, link }) => {
  const handleImageClick = () => {
    window.open(link, '_blank');
  };
  return (
    <div className='d-flex justify-content-center'>
      <Card style={{ width: '18.75rem', height: 350, marginBottom: 10, border: 'none' }}>
        <Card.Img variant="top" src={src} style={{ width: 300, height: 200, cursor: 'pointer' }} onClick={handleImageClick} />
        <Card.Body style={{ backgroundColor: '#f7fdf3', color: '#35b276' }}>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{desc}</Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </div>
  )
}