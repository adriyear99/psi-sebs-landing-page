import React from "react"


function Sobre() {
    return (
        <div id="sobre" className="py-5">
            <div className="row">
                <img src={require("../assets/sebs2.jpg")} alt="Sebastião Venâncio" className="imagem col-12 col-md-4 order-md-2 mb-3 px-5"/>
                <section className="col-12 col-md-7 order-md-1 text-justify px-5">
                    <h1 style={{textAlign:"center"}}>Sobre Mim</h1>
                    <p className="texto m-4">
                        Olá, me chamo Sebastião e sou psicólogo clínico de orientação psicanalítica, realizei minha graduação na Universidade de Brasília (UnB) onde atualmente também faço mestrado em Psicologia Clínica e Cultura sobre a clínica psicanalítica de adolescentes. Ao longo da minha trajetória, percebi a importância do ambiente e do contexto que estamos inseridos, e por conta disso, em minha prática busco oferecer um espaço seguro e acolhedor para você refletir sobre si mesmo e sobre sua vida. Além de psicólogo, gosto muito de estudar, ouvir música e tomar café :)  
                    </p>
                </section>
            </div>
        </div>
    );
}

export default Sobre