import "./Perguntas.css"

function Perguntas() {
    return (
        <div className="d-flex flex-row p-2">
            <p>
                Perguntas frequentes:
                - Qual a diferença entre psicoterapia e psicanálise?
                A psicanálise, diferente do que muitos pensam, não se trata de uma abordagem da psicologia, ela surgiu de maneira independente e se constitui enquanto prática independente. O que ocorre é que há uma sobreposição entre as áreas, tendo em vista a importância da psicanálise para a psicoterapia.
                Pode-se pensar nas duas enquanto modalidades de tratamento que se aproximam e conversam, com algumas diferenças na técnica, o que não impede de existir psicoterapias de base psicanalítica! 
                - Quanto tempo dura o atendimento?
                As sessões duram em média 50 minutos, mas se você quer saber a duração do tratamento... ele é variável e depende de diversos fatores da dupla (terapeuta e paciente), mas especialmente do processo e da disposição do paciente. Em virtude disso, sua terapia pode durar 6 meses, um ano ou mais.
                - Devo fazer terapia ou análise?
                Não existe um momento correto para começar! Acredito que o desejo ou a necessidade de entrar em um processo terapêutico ou de análise, diante de alguma dificuldade, sofrimento ou interesse em se conhecer, já são motivos suficientes para buscar atendimento. 
            </p>

            <img
                src={require("../assets/sebs.jpg")}
                alt="Sebastião Venâncio"
                className="imagem"
            />
        </div>
    );
}

export default Perguntas;