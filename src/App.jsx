import React, {useState} from 'react'
import Aboutme from './components/Aboutme'
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Carousel from 'react-bootstrap/Carousel';
import Projects from './components/Projects';

const App = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='mainBlock'>
    {/* <div className="navNar">
      <Root/>
      </div>   */}
    <Carousel data-bs-theme="dark" activeIndex={index} onSelect={handleSelect} interval={null} className="carouselBS">
      <Carousel.Item>
        <Aboutme />
      </Carousel.Item>
      <Carousel.Item>
        <Skills/>
      </Carousel.Item>
      <Carousel.Item>
        <Projects/>
      </Carousel.Item>
      <Carousel.Item>
        <Experience/>
      </Carousel.Item>
      <Carousel.Item>
        <Contact/>
      </Carousel.Item>
    </Carousel>
    <div className="custom-indicators d-flex justify-content-center align-items-center">
        <button
          className={`indicator ${index === 0 ? 'active' : ''}`}
          onClick={() => handleSelect(0)}
        >
          About Me
        </button>
        <button
          className={`indicator ${index === 1 ? 'active' : ''}`}
          onClick={() => handleSelect(1)}
        >
          Skills
        </button>
        <button
          className={`indicator ${index === 2 ? 'active' : ''}`}
          onClick={() => handleSelect(2)}
        >
          Projects
        </button>
        <button
          className={`indicator ${index === 3 ? 'active' : ''}`}
          onClick={() => handleSelect(3)}
        >
          Experience
        </button>
        <button
          className={`indicator ${index === 4 ? 'active' : ''}`}
          onClick={() => handleSelect(4)}
        >
          Contact
        </button>
      </div>
    </div>
  )
}

export default App