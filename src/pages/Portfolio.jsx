import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Portfolio() {
    return(
        <div>
           <Navbar/> 
           <div className="portfolio">
                <div className="container">
                    <h1>Portfolio</h1>

                    <div className="portfolioFlex">



                        <div className="portfolioBox">
                            <img src="https://assets.hongkiat.com/uploads/ui-designer-portfolios/1-creative-UI-designers-portfolios.jpg" alt="" />

                            <div className="p-flex">
                                <span>khrasedul.com</span>
                                <button><a href="" target="_blank" rel="noopener noreferrer">Preview</a></button>
                            </div>
                        </div>

                        <div className="portfolioBox">
                            <img src="https://assets.hongkiat.com/uploads/ui-designer-portfolios/1-creative-UI-designers-portfolios.jpg" alt="" />

                            <div className="p-flex">
                                <span>example.com</span>
                                <button><a href="" target="_blank" rel="noopener noreferrer">Preview</a></button>
                            </div>
                        </div>


                        <div className="portfolioBox">
                            <img src="https://assets.hongkiat.com/uploads/ui-designer-portfolios/1-creative-UI-designers-portfolios.jpg" alt="" />

                            <div className="p-flex">
                                <span>example.com</span>
                                <button><a href="" target="_blank" rel="noopener noreferrer">Preview</a></button>
                            </div>
                        </div>


                        

                    </div>

                    
                </div>
           </div>
           <Footer/>
        </div>        
    )
}

export default Portfolio