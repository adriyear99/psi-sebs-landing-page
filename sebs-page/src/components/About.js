import React from "react"


function About() {
    return (
        <div className="p-2 my-3">
            <div className="row">
                <img
                    src={require("../assets/sebs.jpg")}
                    alt="Sebastião Venâncio"
                    className="imagem col-12 col-md-4 mb-3"
                />
                
                <p className="col-12 col-md-8 pe-5 text-justify">
                    Sobre mim:
                    Oiê! me chamo Sebastião e me formei como psicólogo na Universidade de Brasília (UnB) em 2021, onde atualmente também faço mestrado em Psicologia Clínica e Cultura sobre a clínica psicanalítica de adolescentes. 
                    Parafraseando o psicanalista Fabio Hermann em “O que é Psicanálise”, ao longo de minha caminhada, percebi e percebo que as pessoas são muitas vezes estranhas e absurdas, e, enquanto pessoa, também me descobri estranho e absurdo.
                    Esse entendimento, junto ao estudo da técnica e teoria psicanalítica, são as pedras angulares da minha prática, por mais estranho que possa parecer. 
                    Acredito na importância de histórias e na cultura do desenvolvimento humano, então gosto de assistir filmes, séries, escutar música e jogar. Tais experiências possuem uma carga de subjetividade que muitas vezes podem fazer sentido e trazer reflexões importantes para o processo.
                </p>

            </div>
        </div>
    );
}

export default About