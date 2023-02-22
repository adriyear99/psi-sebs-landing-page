import React, {useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import useWindowDimensions from '../hooks/useWindowDimensions'

const Header = () => {

    const { height, width } = useWindowDimensions();




    useEffect(()=>{
        // console.log("Height: ",height)
        // console.log("Width: ",width)

    },[height,width])








    return (
        <div>
            {width > 720 &&
                <Navbar className='bg-light navigation'>
                    <Container>
                        <Navbar.Brand href="#home">
                            Sebastião Venâncio<br/>
                            Psicologia e Psicanálise
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Nav className="justify-content-end texto">
                            <Nav.Link href="#sobre">Sobre Mim</Nav.Link>
                            <Nav.Link href="#abordagem">Abordagem</Nav.Link>
                            <Nav.Link href="#servicos">Serviços</Nav.Link>
                            <Nav.Link href="#perguntas">Perguntas</Nav.Link>
                            <Nav.Link href="#contatos">Contatos</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>       
            }
        </div>
    )
}

export default Header