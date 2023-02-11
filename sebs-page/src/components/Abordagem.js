import React from "react"

function Abordagem() {
    return (
        <div className="p-2 my-3">
            <div className="row">
                <img
                    src={require("../assets/sebs.jpg")}
                    alt="Sebastião Venâncio"
                    className="imagem col-12 col-md-4 mb-3"
                />
                <p className="col-12 col-md-8 px-3 text-justify">
                    Abordagem:
                    Eu realizo meus atendimentos com base na psicanálise, criada por S. Freud no século XX. A psicanálise possui o foco em entender o sujeito em seus conflitos internos, a partir do entendimento do inconsciente e sua relação com o consciente, mas também em seus aspectos relacionais interpessoais. 
                    Apesar de ter surgido no século passado, a teoria e técnica psicanalítica se atualizam até os dias atuais para poderem dar conta do sofrimento e demandas de mudança que chegam até a clínica. Alguns dos autores que fundamentam a minha prática (além de Freud) são Winnicott, Bion e André Green.
                    Acredito em uma psicoterapia enquanto um ambiente que possibilite o amadurecimento e transformação do sujeito. Um local de acolhimento de suas dores e compartilhamento de experiências, além do entendimento (ou tentativa) dos processos pelos quais ele é atravessado.
                </p>
            </div>
        </div>
    );
}

export default Abordagem