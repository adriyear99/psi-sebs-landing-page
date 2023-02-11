import React from "react"
import './Main.css'
// import Carousel from 'react-bootstrap/Carousel'

function Main() {
    return (
        <div className="menu-container opacity-50">
            <div className="imagem-principal"/>
            {/* <img
                className="d-block w-100 imagem-principal img-responsive"
                src={require("../assets/sala.jpg")}
                alt="Sala de consulta Sebastião Venâncio"
            /> */}
        </div>



        // <Carousel fade controls={false}>
        //     <Carousel.Item interval={500}>
        //         <img
        //             className="d-block w-100"
        //             src={require("../assets/sebs.jpg")}
        //             alt="Sebastião Venâncio"
        //             // style={{opacity:0.5}}
        //         />

        //     </Carousel.Item>
        //     <Carousel.Item interval={500}>
        //         <img
        //             className="d-block w-100"
        //             src={require("../assets/sebs.jpg")}
        //             alt="Sebastião Venâncio"
        //             // style={{opacity:0.5}}
        //         />

        //     </Carousel.Item>
        //     <Carousel.Item interval={500}>
        //         <img
        //             className="d-block w-100"
        //             src={require("../assets/sebs.jpg")}
        //             alt="Sebastião Venâncio"
        //             // style={{opacity:0.5}}
        //         />

        //     </Carousel.Item>
        // </Carousel>
    );
}

export default Main