import React from "react"
import { Accordion } from "react-bootstrap"


function Perguntas() {
    return (
        <div id="perguntas" className="p-2 mt-3 mb-4">
            <h1 className="col-12 text-center mb-4">Perguntas Frequentes</h1>
            <div className="row justify-content-center">
                <Accordion className="col-10 col-md-8 col-lg-6">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Qual a diferença entre psicoterapia e psicanálise?</Accordion.Header>
                        <Accordion.Body className="py-4 frutiger-font text-dark">
                            A psicanálise, diferente do que muitos pensam, não se trata de uma abordagem da psicologia, ela surgiu de maneira independente e se constitui enquanto prática independente. O que ocorre é que há uma sobreposição entre as áreas, tendo em vista a importância da psicanálise para a psicoterapia. Pode-se pensar nas duas enquanto modalidades de tratamento que se aproximam e conversam, com algumas diferenças na técnica, o que não impede de existir psicoterapias de base psicanalítica.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Quanto tempo dura o atendimento?</Accordion.Header>
                        <Accordion.Body className="py-4 frutiger-font text-dark">
                            As sessões duram em média 50 minutos, mas se você quer saber a duração do tratamento... ele é variável e depende de diversos fatores do terapeuta e do paciente, mas especialmente de particularidades do processo e da disposição do paciente. Em virtude disso, sua terapia pode durar 6 meses, um ano ou mais.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Quando devo começar a terapia?</Accordion.Header>
                        <Accordion.Body className="py-4 frutiger-font text-dark">
                            Não existe um momento correto para começar. Eu acredito que o desejo ou a necessidade de entrar em um processo terapêutico ou de análise, diante de alguma dificuldade, sofrimento ou interesse em se conhecer, já constitui motivo suficiente para buscar ajuda.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
}

export default Perguntas