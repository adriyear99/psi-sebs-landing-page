import React from "react"


function Servicos(props) {
    return (
        <div id="servicos" className="p-2 mt-3 mb-4">
            <h1 className="col-12 mb-4 text-center">Serviços</h1>
            <div className="row justify-content-center">
                <section className="col-12 col-md-3 mx-5 p-5 text-center servico">
                    <h2>Adultos</h2>
                    <p className="m-4">Texto</p>
                </section>
                <section className="col-12 col-md-3 mx-5 p-5 text-center servico">
                    <h2>Adolescentes</h2>
                    <p className="m-4">Texto</p>
                </section>
            </div>
        </div>
    );
}

export default Servicos