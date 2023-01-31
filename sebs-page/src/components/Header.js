import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import "./Header.css"

const Header = () => {
    return (
        <Navbar className='bg-light navigation'>
            <Container>
                <Navbar.Brand href="#home">Psi Sebs</Navbar.Brand>
                <Navbar.Toggle />
                <Nav className="justify-content-end">
                    <Nav.Link href="#home">Sobre Mim</Nav.Link>
                    <Nav.Link href="#features">Abordagem</Nav.Link>
                    <Nav.Link href="#pricing">Perguntas Frequentes</Nav.Link>
                    <Nav.Link href="#pricing">Serviços</Nav.Link>
                    <Nav.Link href="#pricing">Podcast</Nav.Link>
                    <Nav.Link href="#pricing">Contatos</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header