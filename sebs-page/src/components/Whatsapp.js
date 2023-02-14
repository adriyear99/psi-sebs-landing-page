import React from 'react'
import './Whatsapp.css'


const Whatsapp = () => {

    function redirectToChat() {
        window.open("https://api.whatsapp.com/send/?phone=5561983733961&text&type=phone_number&app_absent=0")
    }

    return (
        <div className='position-fixed icon-container' onClick={redirectToChat}>
            <img src={require("../assets/whatsapp.png")} className="wpp-icon"/>
        </div>
    )
}

export default Whatsapp