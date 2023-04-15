import React from "react"


function Abordagem() {
    return (
        <div id="abordagem" className="p-2 my-5">
            <div className="row justify-content-center">
                <img 
                    src={require("../assets/freud.jpg")} 
                    alt="Sebastião Venâncio" 
                    className="imagem col-12 col-md-6 mb-3 mb-md-0 px-5 ps-md-0 pe-md-5"
                />
                <section className="col-11 col-md-5 text-justify">
                    <h1 className="text-center">Abordagem</h1>
                    <p className="texto p-3">
                        A psicanálise possui o foco em entender o sujeito em seus conflitos internos, a partir do entendimento do inconsciente e sua relação com o consciente, mas também em seus aspectos relacionais interpessoais. Apesar de ter surgido no século XX com Freud, a teoria e técnica psicanalítica se atualizam até os dias atuais para poderem dar conta do sofrimento e demandas que chegam até a clínica. Alguns dos autores que fundamentam a minha prática (além de Freud) são Winnicott, Bion e André Green. Acredito em uma psicoterapia enquanto um ambiente que possibilite o amadurecimento e transformação do sujeito. Um local de acolhimento de suas dores e compartilhamento de experiências, além da busca pela compreensão dos processos pelos quais somos atravessados.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default Abordagem