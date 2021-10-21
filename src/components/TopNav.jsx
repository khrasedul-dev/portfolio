import{  React, useEffect, useState } from "react";


function TopNav(){

    let date = new Date().toLocaleString('en-US',{timeStyle:'medium'})
    const [state,setState] = useState(date)

    useEffect(()=>{
        setInterval(()=>{
            setState(new Date().toLocaleString('en-US',{timeStyle:'medium'}))
        },1000)
    },[])
    
    return(
        <div>
            <div className="topNav">
                <div className="container mainTopNav">
                    <span className="x-font notice">{state}</span>
                    <div className="socialIcon notice">
                        <ul>
                            <li><a target="_blank" href=""><img src="https://image.flaticon.com/icons/png/512/179/179319.png" alt=""/></a></li>
                            <li><a target="_blank" href=""><img src="https://image.flaticon.com/icons/png/512/733/733585.png" alt=""/></a></li>
                            <li><a target="_blank" href=""><img src="https://image.flaticon.com/icons/png/512/732/732200.png" alt=""/></a></li>
                            <li className="lst-child"><a target="_blank" href=""><img src="https://image.flaticon.com/icons/png/512/179/179323.png" alt=""/></a></li>
                        </ul>
                    </div>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default TopNav