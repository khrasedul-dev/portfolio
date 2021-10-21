import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Services() {
    return(
        <div>
           <Navbar/> 
           <div className="container services">
               <h1>Services</h1>
               <div className="mainServices">

                    <div className="planBox">
                        <div className="planBoxHead">
                            <h2>Silver Package</h2>
                            <div className='planPrice'>
                                <sup >$</sup>
                                <span className="taka">200</span>
                                <sub >/Per project</sub>
                            </div>
                            <div className="priceSlug">For Bussiness startup</div>                          
                        </div>
                        <ul className="targetlist">
                            <li><img src="https://cdn-icons-png.flaticon.com/512/189/189677.png" alt="" /> UI/UX by React JS</li>
                            <li><img src="https://cdn-icons-png.flaticon.com/512/189/189677.png" alt="" /> Backend NodeJS </li>
                            <li><img src="https://cdn-icons-png.flaticon.com/512/189/189677.png" alt="" /> MongoDB or MySQL </li>
                            <li><img src="https://cdn-icons-png.flaticon.com/512/189/189677.png" alt="" /> File Upload </li>
                            <li><img src="https://cdn-icons-png.flaticon.com/512/189/189677.png" alt="" /> Two CRUD </li>
                            <li><img src="https://cdn-icons-png.flaticon.com/512/189/189677.png" alt="" /> SEO Support </li>
                            <li><img src="https://cdn-icons-png.flaticon.com/512/189/189677.png" alt="" /> Super Fast Speed</li>
                            <li><img src="https://cdn-icons-png.flaticon.com/512/189/189677.png" alt="" /> Best Security</li>
                            <li><img src="https://cdn-icons-png.flaticon.com/512/189/189677.png" alt="" /> Free Maintainence</li>
                            
                        </ul>

                    </div>



                    <div className="planBox">
                        <div className="planBoxHead">
                            <h2>Gold Package</h2>
                            <div className='planPrice'>
                                <sup >$</sup>
                                <span className="taka">350</span>
                                <sub >/Per project</sub>
                            </div>
                            <div className="priceSlug">For Small Bussiness</div>                          
                        </div>
                        <ul className="targetlist">
                            <li><img src="https://cdn-icons-png.flaticon.com/512/189/189677.png" alt="" /> UI/UX by React JS</li>
                            <li><img src="https://cdn-icons-png.flaticon.com/512/189/189677.png" alt="" /> Backend NodeJS </li>
                            <li><img src="https://cdn-icons-png.flaticon.com/512/189/189677.png" alt="" /> MongoDB or MySQL </li>
                            <li><img src="https://cdn-icons-png.flaticon.com/512/189/189677.png" alt="" /> File Upload </li>
                            <li><img src="https://cdn-icons-png.flaticon.com/512/189/189677.png" alt="" /> Four CRUD </li>
                            <li><img src="https://cdn-icons-png.flaticon.com/512/189/189677.png" alt="" />  SEO Support </li>
                            <li><img src="https://cdn-icons-png.flaticon.com/512/189/189677.png" alt="" /> Super Fast Speed</li>
                            <li><img src="https://cdn-icons-png.flaticon.com/512/189/189677.png" alt="" /> Best Security</li>
                            <li><img src="https://cdn-icons-png.flaticon.com/512/189/189677.png" alt="" /> Free Maintainence</li>
                            
                            
                        </ul>

                    </div>



                    <div className="planBox">
                        <div className="planBoxHead">
                            <h2>Platinum Package</h2>
                            <div className='planPrice'>
                                <sup >$</sup>
                                <span className="taka">500</span>
                                <sub >/Per project</sub>
                            </div>
                            <div className="priceSlug">For Bussiness Management</div>                          
                        </div>
                        <ul className="targetlist">
                            <li><img src="https://cdn-icons-png.flaticon.com/512/189/189677.png" alt="" /> UI/UX by React JS</li>
                            <li><img src="https://cdn-icons-png.flaticon.com/512/189/189677.png" alt="" /> Backend NodeJS </li>
                            <li><img src="https://cdn-icons-png.flaticon.com/512/189/189677.png" alt="" /> MongoDB or MySQL </li>
                            <li><img src="https://cdn-icons-png.flaticon.com/512/189/189677.png" alt="" /> File Upload </li>
                            <li><img src="https://cdn-icons-png.flaticon.com/512/189/189677.png" alt="" /> Two CRUD </li>
                            <li><img src="https://cdn-icons-png.flaticon.com/512/189/189677.png" alt="" />  SEO Support </li>
                            <li><img src="https://cdn-icons-png.flaticon.com/512/189/189677.png" alt="" /> Super Fast Speed</li>
                            <li><img src="https://cdn-icons-png.flaticon.com/512/189/189677.png" alt="" /> Best Security</li>
                            <li><img src="https://cdn-icons-png.flaticon.com/512/189/189677.png" alt="" /> Free Maintainence</li>
                            
                        </ul>

                    </div>

                    

               </div>
           </div>
           <Footer/>
        </div>        
    )
}

export default Services