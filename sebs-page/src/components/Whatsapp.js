import React from 'react'
import './Whatsapp.css'


const Whatsapp = () => {
    return (
        <div className='position-fixed icon-container'>
            <img src={require("../assets/whatsapp.png")} className="wpp-icon"/>
        </div>
    )
}

export default Whatsapp