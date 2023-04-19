import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Image from 'next/image'




const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        <div className="image-box">
          <Image src="/asset/project.png"   layout="fill" alt="My Image"/>
          {/* <img src={""} className="portfolio-image" alt="portfolio" /> */}
          <div className="content">
            <p className="title">`{"Smart Dev Spot"}`</p>
            <h4 className="description">geferfhjerhfen fhjrf</h4>
            <button className="btn">
              View
            </button>
          </div>
        </div>
      </div>
    )
  }


function Portfolio() {
    const [letterClass, setLetterClass] = useState('text-animate')
    const [portfolio, setPortfolio] = useState([])
  
    
  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 500)

    return () => clearTimeout(timer)
  }, [])
  return (
    <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Portfolio'.split('')}
            idx={15}
          />
        </h1>
        <div>{renderPortfolio(portfolio)}</div>
      </div>
  )
}

export default Portfolio