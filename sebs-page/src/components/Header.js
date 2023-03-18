import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Header = () => {

    const [expanded, setExpanded] = useState(false);

    return (
        <div>
            <Navbar className="bg-light navigation" expanded={expanded} expand="md">
                <Container fluid>
                    <Navbar.Brand href="#home">
                        Sebastião Venâncio<br/>
                        Psicologia e Psicanálise
                    </Navbar.Brand>
                    <Navbar.Toggle 
                        aria-controls="navbarScroll" 
                        onClick={() => setExpanded(expanded ? false : "expanded")}
                    />
                    <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                        <Nav className="justify-content-end texto">
                            <Nav.Link href="#sobre">Sobre Mim</Nav.Link>
                            <Nav.Link href="#abordagem">Abordagem</Nav.Link>
                            <Nav.Link href="#servicos">Serviços</Nav.Link>
                            <Nav.Link href="#perguntas">Perguntas</Nav.Link>
                            <Nav.Link href="#contato">Contato</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
