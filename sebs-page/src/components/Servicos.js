import React, { useState } from "react"
import { Card,Button,Modal } from "react-bootstrap"


function Servicos() {

    const [showTeen, setShowTeen] = useState(false);
    const [showAdult, setShowAdult] = useState(false);

    const handleCloseTeen = () => setShowTeen(false);
    const handleShowTeen = () => setShowTeen(true);
    const handleCloseAdult = () => setShowAdult(false);
    const handleShowAdult = () => setShowAdult(true);


    return (
        <div id="servicos" className="p-2 mt-3 mb-5">
            <h1 className="col-12 mb-4 text-center">Serviços</h1>
            <div className="row justify-content-center mb-5 imagem-freud d-flex align-items-center">
                <Card className="col-7 col-md-3 mb-4 mb-md-0 card">
                    <Card.Img variant="top" src={require("../assets/adult.jpg")}/>
                    <Card.ImgOverlay>
                        <Card.Body>
                            <Card.Title className="mb-3 text-light">Adultos</Card.Title>
                            <Button variant="primary" className="mx-auto" onClick={handleShowAdult}>
                                Ver Detalhes
                            </Button>
                        </Card.Body>
                    </Card.ImgOverlay>
                </Card>

                <Card className="col-7 col-md-3 offset-md-1">
                    <Card.Img variant="top" src={require("../assets/teen.jpg")}/>
                    <Card.ImgOverlay>
                        <Card.Body>
                            <Card.Title className="mb-3 text-light">Adolescentes</Card.Title>
                            <Button variant="primary" className="mx-auto" onClick={handleShowTeen}>
                                Ver Detalhes
                            </Button>
                        </Card.Body>
                    </Card.ImgOverlay>

                </Card>
            </div>

            <Modal show={showAdult} onHide={handleCloseAdult} animation={false} dialogClassName="modal" centered>
                <Modal.Header closeButton>
                <Modal.Title>Adultos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Atendimento destinado a pessoas com mais de 18 anos e tem o foco na compreensão do sujeito e como ele se relaciona com o ambiente e na escuta de suas dores. Algumas demandas de adultos que chegam até mim e que possuo experiência para trabalhar são: transtornos psicológicos (como borderline e bipolaridade), depressão, vícios, luto, problemas com o trabalho, ideação suicida, dentre outros. Gosto de trabalhar em parceria com outros profissionais, como psiquiatras, quando for necessário e pertinente ao caso.
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseAdult}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showTeen} onHide={handleCloseTeen} animation={false} dialogClassName="modal" centered>
                <Modal.Header closeButton>
                <Modal.Title>Adolescentes</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Atendimento destinado a pessoas com idade entre 12 e 18 anos e tem o foco no processo de crescimento e amadurecimento, suas questões e particularidades dessa fase do desenvolvimento. Dentre algumas queixas comuns entre os adolescentes atualmente incluem ansiedade, depressão, dificuldade na escola e/ou no relacionamento com os pais, sexualidade, dúvida em relação ao futuro, além de transtornos e comportamentos como automutilação, uso de substâncias, dentre outros. Realizo também orientação profissional, caso seja de interesse do adolescente. É necessário o consentimento dos pais para realizar o processo terapêutico, e eles podem ser chamados para consultas pontuais.
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseTeen}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Servicos