import React from "react"

// Icons
import { BsFillEnvelopeFill } from "react-icons/bs"
import { BsTelephoneFill } from "react-icons/bs"
import { BiMap } from "react-icons/bi"

// Form
import { Form } from "react-bootstrap"
import { Button } from "react-bootstrap"


function Contato() {
    return (
        <div id="contato" className="p-2 mt-5">
            <div className="row justify-content-center">
                <div className="col-11 col-md-4 offset-md-1 my-3 text-justify">
                    <h2>Agende sua sessão</h2>
                    <p className="texto">Preencha os dados ao lado ou mande uma mensagem que entrarei em contato para tirar dúvidas ou marcar uma sessão!</p>
                    <ul className="list-unstyled">
                        <li>
                            <BsFillEnvelopeFill/>
                            <span className="mx-2">contato@sebsvenancio.com.br</span>
                        </li>
                        <li>
                            <BsTelephoneFill/>
                            <span className="mx-2">(61) 98373-3961</span>
                        </li>
                        <li>
                            <BiMap/>
                            <span className="mx-2">Brasília - DF</span>
                        </li>
                    </ul>
                </div>
                <Form className="col-12 col-md-5 offset-md-1 my-3">
                    <div className="row justify-content-center">
                        <Form.Group className="mb-3 col-11 col-md-6" controlId="nome">
                            <Form.Control type="text" placeholder="Nome"/>
                        </Form.Group>
                        <Form.Group className="mb-3 col-11 col-md-6" controlId="telefone">
                            <Form.Control type="text" placeholder="Celular (WhatsApp)"/>
                        </Form.Group>
                    </div>
                    <div className="row justify-content-center">
                        <Form.Group className="mb-3 col-11 col-md-12" controlId="email">
                                <Form.Control type="email" placeholder="E-mail"/>
                        </Form.Group>
                    </div>
                    <div className="row justify-content-center">
                        <Form.Group className="mb-3 col-11 col-md-6" controlId="tipoAtendimento">
                            <Form.Label className="text-warning">
                                Qual opção é melhor para você?
                            </Form.Label>
                            <Form.Select aria-label="Tipo de Atendimento">
                                <option value="1" selected>Online</option>
                                <option value="2">Presencial</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3 col-11 col-md-6" controlId="tipoPaciente">
                            <Form.Label className="text-warning">
                                Qual tipo de atendimento?
                            </Form.Label>
                            <Form.Select aria-label="Tipo de Paciente">
                                <option value="1" selected>Adulto</option>
                                <option value="2">Adolescente</option>
                            </Form.Select>
                        </Form.Group>
                    </div>
                    <div className="row justify-content-center">
                        <Form.Group className="mb-3 col-11 col-md-12" controlId="mensagem">
                            <Form.Control as="textarea" rows={4} placeholder="Mensagem"/>
                        </Form.Group>
                    </div>
                    <div className="row justify-content-center">
                        <Form.Group className="mb-3 col-11 col-md-12" controlId="mensagem">
                            <Button variant="warning" type="submit" className="col-12">Enviar</Button>
                        </Form.Group>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default Contato