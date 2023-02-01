import "./Contato.css"

function Contato() {
    return (
        <div className="d-flex flex-row p-2">
            <p>
                Contato: 
                Agende sua sessão ou mande uma mensagem para tirar dúvidas :)
                (61) 983733961
                sebsvenancio.psi@gmail.com
                SEPS 705/ 905 Sul Ed. Mont Blanc, Sala 140 – Asa Sul, Brasília
                Pré-agendamento:
                https://forms.gle/5XMoLTPF9yMgoJaf7

            </p>

            <img
                src={require("../assets/sebs.jpg")}
                alt="Sebastião Venâncio"
                className="imagem"
            />
        </div>
    );
}

export default Contato;