import React, {useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import "./Header.css"
import useWindowDimensions from '../hooks/useWindowDimensions'

const Header = () => {

    const { height, width } = useWindowDimensions();




    useEffect(()=>{
        console.log("Height: ",height)
        console.log("Width: ",width)

    },[height,width])








    return (
        <div>
            {width < 550 ? 
                <Navbar bg="light" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#">Psi Sebs</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '200px' }} navbarScroll>
                                    <NavDropdown.Item href="#action3">Sobre Mim</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Abordagem</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Perguntas Frequentes</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Serviços</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Contatos</NavDropdown.Item>
                                    <NavDropdown.Divider/>
                                    <NavDropdown.Item href="#">Voltar para o topo</NavDropdown.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            
            :
        
                <Navbar className='bg-light navigation'>
                    <Container>
                        <Navbar.Brand href="#home">Psi Sebs</Navbar.Brand>
                        <Navbar.Toggle />
                        <Nav className="justify-content-end">
                            <Nav.Link href="#home">Sobre Mim</Nav.Link>
                            <Nav.Link href="#features">Abordagem</Nav.Link>
                            <Nav.Link href="#pricing">Perguntas Frequentes</Nav.Link>
                            <Nav.Link href="#pricing">Serviços</Nav.Link>
                            <Nav.Link href="#pricing">Contatos</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>       
            }
        </div>
    )
}

export default Header