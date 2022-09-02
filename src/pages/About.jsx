import { GiInfo } from 'react-icons/gi'

function About() {
  return (
    <div className='container alignCenter'>
      <div className='aboutIcon'>
        <GiInfo className={'iconScaling'} size={250} color={'#e0e0e2'} />
      </div>
      <div className='aboutInfo'>
        <h2>Deal Finder</h2>
        <p>
          DealFinder is a react app that searches game deals and finds the best
          game deal available in all the popular game stores. This application
          can also find a random game deal for those who want to find something
          new. To do that click the "RANDOMISE" button.
        </p>

        <div className='version'>
          <p>version </p>
          <p style={{ color: '#81d2c7' }}>1.0</p>
        </div>
      </div>

      <div className='developerInfo'>
        <p>Developer: Denis Volosin</p>
        <p>Phone number: 07934758133</p>
        <p>Email Address: denisvolosin21@gmail.com</p>
        <p>
          Github:{' '}
          <a href='https://github.com/denis21v' target='_blank'>
            denis21v
          </a>
        </p>
      </div>
    </div>
  )
}

export default About
