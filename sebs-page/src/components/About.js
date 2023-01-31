import Carousel from 'react-bootstrap/Carousel'
import "./About.css"

function About() {
    return (
        <Carousel fade  interval={500} controls={false}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require("../assets/sebs.jpg")}
                    alt="Sebastião Venâncio"
                    // style={{opacity:0.5}}
                />
                <Carousel.Caption>
                    <h3>Psi Sebs</h3>
                    <p>O psicólogo do sexo.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require("../assets/sebs.jpg")}
                    alt="Sebastião Venâncio"
                    // style={{opacity:0.5}}
                />
                <Carousel.Caption>
                    <h3>Bad Omens</h3>
                    <p>Just Pretend</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require("../assets/sebs.jpg")}
                    alt="Sebastião Venâncio"
                    // style={{opacity:0.5}}
                />
                <Carousel.Caption>
                    <h3>23:47</h3>
                    <p>Vou me matar</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default About;