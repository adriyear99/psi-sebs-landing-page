import React from "react"
import { Card,Button } from "react-bootstrap"


function Servicos(props) {
    return (
        <div id="servicos" className="p-2 mt-3 mb-4">
            <h1 className="col-12 mb-4 text-center">Serviços</h1>
            <div className="row justify-content-center">
                <Card className="col-10 col-md-4">
                    <Card.Img variant="top" src={require("../assets/sebs.jpg")} />
                    <Card.Body className="text-center d-flex flex-column">
                        <Card.Title>Adultos</Card.Title>
                        <Card.Text className="texto text-justify">
                            Atendimento destinado a pessoas com mais de 18 anos e tem o foco na compreensão do sujeito e como ele se relaciona com o ambiente e na escuta de suas dores. Algumas demandas de adultos que chegam até mim e que possuo experiência para trabalhar são: transtornos psicológicos (como borderline e bipolaridade), depressão, vícios, luto, problemas com o trabalho, ideação suicida, dentre outros. Gosto de trabalhar em parceria com outros profissionais, como psiquiatras, quando for necessário e pertinente ao caso.
                        </Card.Text>
                        <Button variant="primary" className="mt-auto mx-auto">Ver Detalhes</Button>
                    </Card.Body>
                </Card>

                <Card className="col-10 col-md-4 offset-md-1">
                    <Card.Img variant="top" src={require("../assets/sebs.jpg")} />
                    <Card.Body className="text-center d-flex flex-column">
                        <Card.Title>Adolescentes</Card.Title>
                        <Card.Text className="texto text-justify">
                            Atendimento destinado a pessoas com idade entre 12 e 18 anos e tem o foco no processo de crescimento e amadurecimento, suas questões e particularidades dessa fase do desenvolvimento. Dentre algumas queixas comuns entre os adolescentes atualmente incluem ansiedade, depressão, dificuldade na escola e/ou no relacionamento com os pais, sexualidade, dúvida em relação ao futuro, além de transtornos e comportamentos como automutilação, uso de substâncias, dentre outros. Realizo também orientação profissional, caso seja de interesse do adolescente. É necessário o consentimento dos pais para realizar o processo terapêutico, e eles podem ser chamados para consultas pontuais.
                        </Card.Text>
                        <Button variant="primary" className="mt-auto mx-auto">Ver Detalhes</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default Servicos