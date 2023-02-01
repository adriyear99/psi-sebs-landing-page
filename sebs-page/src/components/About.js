import Carousel from 'react-bootstrap/Carousel'
import "./About.css"

function About() {
    return (
        <Carousel fade controls={false}>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src={require("../assets/sebs.jpg")}
                    alt="Sebastião Venâncio"
                    // style={{opacity:0.5}}
                />

            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src={require("../assets/sebs.jpg")}
                    alt="Sebastião Venâncio"
                    // style={{opacity:0.5}}
                />

            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src={require("../assets/sebs.jpg")}
                    alt="Sebastião Venâncio"
                    // style={{opacity:0.5}}
                />

            </Carousel.Item>
        </Carousel>
    );
}

export default About;