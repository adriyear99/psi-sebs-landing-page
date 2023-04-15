import React, { useState,useEffect } from "react"
import UseWhatsapp from 'whatsapp-react-component'

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
    const [tipoAtendimento,setTipoAtendimento] = useState("1")
    const [tipoPaciente,setTipoPaciente] = useState("1")
    const [mensagem,setMensagem] = useState("")
    const [total,setTotal] = useState("")

    const concatMessage = () => {
        setTotal(
            `Nome: ${name}\n` +
            `Telefone: ${phone}\n` +
            `E-mail: ${email}\n` +
            `Tipo de atendimento: ${tipoAtendimento==="1"?"Online":"Presencial"}\n` +
            `Tipo de paciente: ${tipoPaciente==="1"?"Adulto":"Adolescente"}\n` +
            `Mensagem: ${mensagem}`
        )
    }

    useEffect(()=>{
        const sendWpp = () => {
            if(total !== ""){
                UseWhatsapp('5561983733961',total)
                setTotal("")
            }
        }
        sendWpp()
    },[total])


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
                            <Form.Control type="text" value={name} maxLength={60} onChange={e => setName(e.target.value)} placeholder="Nome"/>
                        </Form.Group>
                        <Form.Group className="mb-3 col-11 col-md-6" controlId="telefone">
                            <Form.Control type="text" value={phone} maxLength={20} onChange={e => setPhone(e.target.value)} placeholder="Celular (WhatsApp)"/>
                        </Form.Group>
                    </div>
                    <div className="row justify-content-center">
                        <Form.Group className="mb-3 col-11 col-md-12" controlId="email">
                                <Form.Control type="email" value={email} maxLength={60} onChange={e => setEmail(e.target.value)} placeholder="E-mail"/>
                        </Form.Group>
                    </div>
                    <div className="row justify-content-center">
                        <Form.Group className="mb-3 col-11 col-md-6" controlId="tipoAtendimento">
                            <Form.Label className="text-warning frutiger-font">
                                Qual opção é melhor para você?
                            </Form.Label>
                            <Form.Select aria-label="Tipo de Atendimento" defaultValue={"1"} onChange={e => setTipoAtendimento(e.target.value)}>
                                <option value="1">Online</option>
                                <option value="2">Presencial</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3 col-11 col-md-6" controlId="tipoPaciente" onChange={e => setTipoPaciente(e.target.value)}>
                            <Form.Label className="text-warning frutiger-font">
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