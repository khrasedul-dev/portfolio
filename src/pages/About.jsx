import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import rasedul from '../assets/img/khrasedul.png'

function About() {
    return(
        <div>
           <Navbar/> 
           <div className=" container about">
                <h1>About</h1>
                <div className="mainabout">
                    <div className="ab imageSide">
                        <img src={rasedul} alt="" />
                    </div>
                    <div className="ab bioSide">
                        <ul>
                            <li><span>Name:</span> KH Rasedul</li>
                            <li><span>Age:</span> 21</li>
                            <li><span>Address:</span> Sirajkandi Bazar,Sirajkandi</li>
                            <li className='pf'>Nikrail</li>
                            <li className='pf'>Buyapur,Tangail</li>
                            <li className='pf'>Dhaka,Bangladesh<span>.</span></li>
                            <li><span>Phone:</span> <a href="tel:+880-1971-017764">01971017764</a></li>
                            <li><span>Hoby:</span> Gaming</li>
                            <li><span>Food:</span> Street Food</li>
                        </ul>
                    </div>
                </div>
           </div>
           <Footer/>
        </div>        
    )
}

export default About