import React from "react"
import './Main.css'
// import Carousel from 'react-bootstrap/Carousel'

function Main() {
    return (
        <div className="opacity-50 col-12">
            <img
                className="d-block w-100 imagem-principal"
                src={require("../assets/sebs.jpg")}
                alt="Sebastião Venâncio"
            />
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