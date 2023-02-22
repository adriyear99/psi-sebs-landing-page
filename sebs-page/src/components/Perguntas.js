import React from "react"
import { Accordion } from "react-bootstrap"


function Perguntas() {
    return (
        <div id="perguntas" className="p-2 mt-3 mb-4">
            <h1 className="col-12 text-center mb-4">Perguntas Frequentes</h1>
            <div className="row justify-content-center">
                <Accordion defaultActiveKey="0" className="col-10 col-md-8 col-lg-6">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Qual a diferença entre psicoterapia e psicanálise?</Accordion.Header>
                        <Accordion.Body className="py-4">
                            A psicanálise, diferente do que muitos pensam, não se trata de uma abordagem da psicologia, ela surgiu de maneira independente e se constitui enquanto prática independente. O que ocorre é que há uma sobreposição entre as áreas, tendo em vista a importância da psicanálise para a psicoterapia. Pode-se pensar nas duas enquanto modalidades de tratamento que se aproximam e conversam, com algumas diferenças na técnica, o que não impede de existir psicoterapias de base psicanalítica.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Quanto tempo dura o atendimento?</Accordion.Header>
                        <Accordion.Body className="py-4">
                            As sessões duram em média 50 minutos, mas se você quer saber a duração do tratamento... ele é variável e depende de diversos fatores do terapeuta e do paciente, mas especialmente de particularidades do processo e da disposição do paciente. Em virtude disso, sua terapia pode durar 6 meses, um ano ou mais.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Quando devo começar a terapia?</Accordion.Header>
                        <Accordion.Body className="py-4">
                            Não existe um momento correto para começar. Eu acredito que o desejo ou a necessidade de entrar em um processo terapêutico ou de análise, diante de alguma dificuldade, sofrimento ou interesse em se conhecer, já constitui motivo suficiente para buscar ajuda.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            {/* <div className="row justify-content-center">
                <div className="accordion accordion-flush col-8" id="perguntasFrequentes">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">Qual a diferença entre psicoterapia e psicanálise?</button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#perguntasFrequentes">
                            <div className="accordion-body">
                                A psicanálise, diferente do que muitos pensam, não se trata de uma abordagem da psicologia, ela surgiu de maneira independente e se constitui enquanto prática independente. O que ocorre é que há uma sobreposição entre as áreas, tendo em vista a importância da psicanálise para a psicoterapia. Pode-se pensar nas duas enquanto modalidades de tratamento que se aproximam e conversam, com algumas diferenças na técnica, o que não impede de existir psicoterapias de base psicanalítica.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">Quanto tempo dura o atendimento?</button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#perguntasFrequentes">
                            <div className="accordion-body">
                                As sessões duram em média 50 minutos, mas se você quer saber a duração do tratamento... ele é variável e depende de diversos fatores do terapeuta e do paciente, mas especialmente de particularidades do processo e da disposição do paciente. Em virtude disso, sua terapia pode durar 6 meses, um ano ou mais.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">Quando devo começar a terapia?</button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#perguntasFrequentes">
                            <div className="accordion-body">
                                Não existe um momento correto para começar. Eu acredito que o desejo ou a necessidade de entrar em um processo terapêutico ou de análise, diante de alguma dificuldade, sofrimento ou interesse em se conhecer, já constitui motivo suficiente para buscar ajuda.
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default Perguntas