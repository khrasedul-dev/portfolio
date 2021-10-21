import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Navbar from '../components/Navbar'
import myImage from '../assets/img/khrasedul.png'
import Skills from '../components/Skills'
import Footer from '../components/Footer'
import WorkLang from '../components/WorkLang'

function Home() {

    return(
        <div>
            <Navbar/>

            <div className="">
                <div className="container showcase">
                    <div className="mergeFlex shortInfo">
                        <div className="shortInfoBox">
                            <h1>Hello,</h1>
                            <div className="dynamicText">
                                <span className="fixedText">I am </span>
                                <Typewriter
                                    words={['KH Rasedul','Web Designer', 'Web Developer']}
                                    loop={true}
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={100}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                /> 
                            </div>     
                            <button className="resumeBtn">Resume</button>    
                            <button className="hireMeBtn">Hire Me</button>               
                        </div>
                    </div>
                    <div className="mergeFlex myPhoto">
                        <img src={myImage}alt="KH Rasedul"/>
                    </div>
                </div>
            </div>  
            
            <Skills/>  
            <WorkLang/>
            <Footer/>        
        </div>
    )
}

export default Home