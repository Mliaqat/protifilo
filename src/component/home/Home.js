import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Link from "next/link";
import Layout from "../Layout/Layout";
import Head from "next/head";
// import Loader from 'react-loaders'
// import AnimatedLetters from '../AnimatedLetters'
// import LogoTitle from '../../assets/images/logo-s.png'

const Home = () => {
  const nameArray = ["L", "i", "a", "q", "a", "t"];
  const [letterClass, setLetterClass] = useState('text-animate')

  const jobArray = [
    'W',
    'e',
    'b',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
   
    <div className="container home-page">
    <div className="text-zone">
      <h1>
        <span className={letterClass}>H</span>
        <span className={`${letterClass} _12`}>i,</span>
        <br />
        <span className={`${letterClass} _13`}>I</span>
        <span className={`${letterClass} _13  spacing`}></span>
        <span className={`${letterClass} _14  spacing`}> am</span>
        {/* <img
          src={LogoTitle}
          alt="JavaScript Developer Name, Web Developer Name"
        /> */}
        <AnimatedLetters
          letterClass={letterClass}
          strArray={nameArray}
          idx={15}
        />
        <br />
        <AnimatedLetters
          letterClass={letterClass}
          strArray={jobArray}
          idx={22}
        />
        <br/>
      </h1>
      <br/>
      <h2>Front End Developer / JavaScript Expert</h2>
      <Link href="/contact" className="flat-button">
        CONTACT ME
      </Link>
    </div>
    {/* <Logo /> */}
  </div>
  </>
  );
};

export default Home;
