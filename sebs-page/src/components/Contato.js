import React from "react"

function Contato() {
    return (
        <div className="p-2 my-3">
            <div className="row">
                <img
                    src={require("../assets/sebs.jpg")}
                    alt="Sebastião Venâncio"
                    className="imagem col-12 col-md-4 mb-3"
                />
                <p className="col-12 col-md-8 px-3 text-justify">
                    Contato: 
                    Agende sua sessão ou mande uma mensagem para tirar dúvidas :)
                    (61) 983733961
                    sebsvenancio.psi@gmail.com
                    SEPS 705/ 905 Sul Ed. Mont Blanc, Sala 140 – Asa Sul, Brasília
                    Pré-agendamento:
                    https://forms.gle/5XMoLTPF9yMgoJaf7
                </p>
            </div>
        </div>
    );
}

export default Contato