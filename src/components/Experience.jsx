import React from 'react'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

const Experience = () => {
  return (
    <section className="expBody db-flex flex-column justify-content-center align-items-center">
        <h1 className="expHeading">Experience</h1>
        <div className="tabContainer">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">2020 - Present</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">2017-2019</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
                <span className='h3' style={{color: '#67b773'}}>Software Engineer </span><span style={{color: '#67b773'}}><i>- ElementBlue, Dubai</i></span>
                <p style={{color: '#347571',paddingTop: 10}}><i><b>1. Smart Service Drug Registration (Live)</b></i> : At the Ministry of Health and Prevention, I work as a front-end technical support engineer, utilizing HTML5, CSS3, Bootstrap, JavaScript, TypeScript, and Angular to build and refine application functionality. My role involves developing new services, enhancing existing features, and addressing critical production issues to ensure stable, high-performance systems. I integrate APIs and third-party services, including UAEPASS, Customer Pulse, and Chat Bot, collaborating with back-end teams to deliver seamless, user-centered solutions. Additionally, I actively participate in production deployments and thorough application testing to ensure a reliable, quality user experience.</p>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
            <span className='h3' style={{color: '#67b773'}}>Associate Application Engineer</span><span style={{color: '#67b773'}}><i>- GapBlue, India</i></span>
                {/* <p style={{color: '#347571',paddingTop: 10}}>At the Ministry of Health and Prevention, I work as a front-end technical support engineer, utilizing HTML5, CSS3, Bootstrap, JavaScript, TypeScript, and Angular to build and refine application functionality. My role involves developing new services, enhancing existing features, and addressing critical production issues to ensure stable, high-performance systems. I integrate APIs and third-party services, including UAEPASS, Customer Pulse, and Chat Bot, collaborating with back-end teams to deliver seamless, user-centered solutions. Additionally, I actively participate in production deployments and thorough application testing to ensure a reliable, quality user experience.</p> */}
            <p style={{color: '#347571',paddingTop: 10}}><i><b>1. Chart.js Implementation</b></i>: Developed a data visualization feature to extract and display data from Oracle E-Business Suite as interactive, configurable charts. Using JavaScript, jQuery, and Chart.js, I parsed JSON files to retrieve necessary data, implemented design modifications, and performed testing to ensure functionality and accuracy.</p>
            <p style={{color: '#347571',paddingTop: 10}}><i><b>2. Gbuzz Migration</b></i>: Led the migration of the Gbuzz project from PHP to a modern technology stack with Node.js and Angular. This project involved writing clean, efficient code, developing new features, and conducting comprehensive testing to enhance system performance and maintainability.</p>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
        </div>
    </section>
    
  )
}

export default Experience