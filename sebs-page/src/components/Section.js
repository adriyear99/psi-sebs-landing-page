import React from "react"


function Section(props) {
    return (
        <div className="p-2 mt-3 mb-4">
            <div className="row">
                <img src={props.image} alt={props.alt} className="imagem col-12 col-md-4 mb-3 px-5"/>
                <section className="col-12 col-md-7 text-justify">
                    <h1 style={{textAlign:"center"}}>{props.label}</h1>
                    <p className="m-4">{props.text}</p>
                </section>
            </div>
        </div>
    );
}

export default Section