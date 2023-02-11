import React from "react"

function Servicos() {
    return (
        <div className="p-2 my-3">
            <div className="row">
                <img
                    src={require("../assets/sebs.jpg")}
                    alt="Sebastião Venâncio"
                    className="imagem col-12 col-md-4 mb-3"
                />
                <p className="col-12 col-md-8 px-3 text-justify">
                    Serviços:
                    Atendimento psicológico e psicanalítico de adolescentes, adultos e idosos. Os atendimentos podem ser realizados de maneira remota, a partir de plataformas que assegurem o sigilo dos atendimentos, ou de maneira presencial, realizados na Asa Sul, em Brasília.
                    Tenho experiência no trabalho com diversas demandas, dentre elas: transtornos de personalidade e afetivos (como bipolaridade e borderline), depressão, ansiedade, luto, problemas em relacionamentos, timidez, autoimagem, comportamento de automutilação, suicídio, vícios, dentre outros.
                </p>
            </div>
        </div>
    );
}

export default Servicos;