import React, { useState,useEffect } from "react"

// Icons
import { BsFillEnvelopeFill } from "react-icons/bs"
import { BsTelephoneFill } from "react-icons/bs"
import { BiMap } from "react-icons/bi"

// Form
import { Form } from "react-bootstrap"
import { Button } from "react-bootstrap"


function Contato() {

    const [name,setName] = useState("")
    const [phone,setPhone] = useState("")
    const [email,setEmail] = useState("")
    const [tipoAtendimento,setTipoAtendimento] = useState("")
    const [tipoPaciente,setTipoPaciente] = useState("")
    const [mensagem,setMensagem] = useState("")

    const [total,setTotal] = useState("")

    const sendWpp = () => {
        console.log('teste')
    }

    const concatMessage = () => {
        setTotal(
            `Nome: ${name}\n
            Telefone: ${phone}\n
            E-mail: ${email}\n
            Tipo de atendimento: ${tipoAtendimento}\n
            Tipo de paciente: ${tipoPaciente}\n
            Mensagem: ${mensagem}`
        )
    }

    useEffect(()=>{sendWpp()},[total])


    return (
        <div id="contato" className="p-2 mt-5">
            <div className="row justify-content-center">
                <div className="col-10 col-md-4 my-3 text-justify">
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
                            <Form.Control type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Nome"/>
                        </Form.Group>
                        <Form.Group className="mb-3 col-11 col-md-6" controlId="telefone">
                            <Form.Control type="text" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Celular (WhatsApp)"/>
                        </Form.Group>
                    </div>
                    <div className="row justify-content-center">
                        <Form.Group className="mb-3 col-11 col-md-12" controlId="email">
                                <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="E-mail"/>
                        </Form.Group>
                    </div>
                    <div className="row justify-content-center">
                        <Form.Group className="mb-3 col-11 col-md-6" controlId="tipoAtendimento">
                            <Form.Label className="text-warning">
                                Qual opção é melhor para você?
                            </Form.Label>
                            <Form.Select aria-label="Tipo de Atendimento" defaultValue={"1"} onChange={e => setTipoAtendimento(e.target.value)}>
                                <option value="1">Online</option>
                                <option value="2">Presencial</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3 col-11 col-md-6" controlId="tipoPaciente" onChange={e => setTipoPaciente(e.target.value)}>
                            <Form.Label className="text-warning">
                                Qual tipo de atendimento?
                            </Form.Label>
                            <Form.Select aria-label="Tipo de Paciente" defaultValue={"1"}>
                                <option value="1">Adulto</option>
                                <option value="2">Adolescente</option>
                            </Form.Select>
                        </Form.Group>
                    </div>
                    <div className="row justify-content-center">
                        <Form.Group className="mb-3 col-11 col-md-12" controlId="mensagem">
                            <Form.Control as="textarea" rows={4} maxLength={200} placeholder="Mensagem" onChange={e => setMensagem(e.target.value)}/>
                        </Form.Group>
                    </div>
                    <div className="row justify-content-center">
                        <Form.Group className="mb-3 col-11 col-md-12" controlId="enviar">
                            <Button variant="warning" type="button" className="col-12" onClick={concatMessage}>
                                Enviar
                            </Button>
                        </Form.Group>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default Contato