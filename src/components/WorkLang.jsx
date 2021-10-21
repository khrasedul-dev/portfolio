import React from "react";
import js from '../assets/img/LanLogo/js.png'
import mongo from '../assets/img/LanLogo/mongo.png'

function WorkLang() {
    return(
        <div>
            <div className="">
                <div className="container mainlang">
                    <h1>Working Languages</h1>
                    <ul>
                        <li><img src="https://cdn-icons-png.flaticon.com/512/919/919827.png" alt="HTML" /></li>
                        <li><img src="https://cdn-icons-png.flaticon.com/512/919/919826.png" alt="CSS" /></li>
                        <li><img src={js} alt="Javascript" /></li>
                        <li><img src="https://cdn-icons-png.flaticon.com/512/919/919830.png" alt="PHP" /></li>
                        <li><img src="https://cdn-icons-png.flaticon.com/512/919/919825.png" alt="NodeJS" /></li>
                        <li><img src="https://cdn-icons-png.flaticon.com/512/919/919851.png" alt="React JS" /></li>
                        <li><img src="https://cdn-icons-png.flaticon.com/512/919/919836.png" alt="MySQL" /></li>
                        <li><img src={mongo} alt="MongoDB" /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default WorkLang