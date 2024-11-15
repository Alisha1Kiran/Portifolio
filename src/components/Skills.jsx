import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';


const Skills = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="skillBody">
        <h1 className="mainTitle">Skill Highlights</h1>
        <div className="skillList1">
            <h2 className="subTitle">Front End</h2>
            <ul className="skillSubList row">
                <li className="col-xs-4 col-sm-6 col-lg-4">HTML5</li>
                <li className="col-xs-4 col-sm-6 col-lg-4">CSS3</li>
                <li className="col-xs-4 col-sm-6 col-lg-4">Bootstrap5</li>
                <li className="col-xs-4 col-sm-6 col-lg-4">JavaScript</li>
                <li className="col-xs-4 col-sm-6 col-lg-4">TypeScript</li>
                <li className="col-xs-4 col-sm-6 col-lg-4">Angular</li>
                <li className="col-xs-4 col-sm-6 col-lg-4">React</li>
            </ul>
        </div>
        <div className='skillList2'>
        <h2 className="subTitle">Back End</h2>
            <ul className="skillSubList row">
                <li className="col-sm-6 col-lg-4">Node js</li>
                <li className="col-sm-6 col-lg-4">Mongodb</li>
            </ul>
        </div>
        <div className='skillList3'>
            <h2 className="subTitle">Version Controler</h2>
            <ul className="skillSubList row">
                <li className="col-sm-6 col-lg-4">Git</li>
                <li className="col-sm-6 col-lg-4">Github</li>
                <li className="col-sm-6 col-lg-4">SourceTree</li>
            </ul>
        </div>
        </div>
        
    </div>
  )
}

export default Skills