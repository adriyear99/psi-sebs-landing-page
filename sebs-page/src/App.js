import './App.css'

// Componentes
import Header from './components/Header'
import Main from './components/Main'
import Whatsapp from './components/Whatsapp'
import Section from './components/Section'


const App = () => {
  return (
    <div className="app no-padding">
      <Header/>
      <Main/>
      <Whatsapp/>
      <Section
        image={require("./assets/sebs.jpg")}
        alt="Sebastião Venâncio"
        label="Sobre Mim"
        text="Oiê! me chamo Sebastião e me formei como psicólogo na Universidade de Brasília (UnB) em 2021, onde atualmente também faço mestrado em Psicologia Clínica e Cultura sobre a clínica psicanalítica de adolescentes. 
        Parafraseando o psicanalista Fabio Hermann em “O que é Psicanálise”, ao longo de minha caminhada, percebi e percebo que as pessoas são muitas vezes estranhas e absurdas, e, enquanto pessoa, também me descobri estranho e absurdo.
        Esse entendimento, junto ao estudo da técnica e teoria psicanalítica, são as pedras angulares da minha prática, por mais estranho que possa parecer. 
        Acredito na importância de histórias e na cultura do desenvolvimento humano, então gosto de assistir filmes, séries, escutar música e jogar. Tais experiências possuem uma carga de subjetividade que muitas vezes podem fazer sentido e trazer reflexões importantes para o processo."
      />
      <Section
        image={require("./assets/sebs.jpg")}
        alt="Sebastião Venâncio"
        label="Abordagem"
        text="Eu realizo meus atendimentos com base na psicanálise, criada por S. Freud no século XX. A psicanálise possui o foco em entender o sujeito em seus conflitos internos, a partir do entendimento do inconsciente e sua relação com o consciente, mas também em seus aspectos relacionais interpessoais. 
        Apesar de ter surgido no século passado, a teoria e técnica psicanalítica se atualizam até os dias atuais para poderem dar conta do sofrimento e demandas de mudança que chegam até a clínica. Alguns dos autores que fundamentam a minha prática (além de Freud) são Winnicott, Bion e André Green.
        Acredito em uma psicoterapia enquanto um ambiente que possibilite o amadurecimento e transformação do sujeito. Um local de acolhimento de suas dores e compartilhamento de experiências, além do entendimento (ou tentativa) dos processos pelos quais ele é atravessado."
      />
      <Section
        image={require("./assets/sebs.jpg")}
        alt="Sebastião Venâncio"
        label="Perguntas Frequentes"
        text="
        - Qual a diferença entre psicoterapia e psicanálise?
        A psicanálise, diferente do que muitos pensam, não se trata de uma abordagem da psicologia, ela surgiu de maneira independente e se constitui enquanto prática independente. O que ocorre é que há uma sobreposição entre as áreas, tendo em vista a importância da psicanálise para a psicoterapia.
        Pode-se pensar nas duas enquanto modalidades de tratamento que se aproximam e conversam, com algumas diferenças na técnica, o que não impede de existir psicoterapias de base psicanalítica!
        - Quanto tempo dura o atendimento?
        As sessões duram em média 50 minutos, mas se você quer saber a duração do tratamento... ele é variável e depende de diversos fatores da dupla (terapeuta e paciente), mas especialmente do processo e da disposição do paciente. Em virtude disso, sua terapia pode durar 6 meses, um ano ou mais.
        - Devo fazer terapia ou análise?
        Não existe um momento correto para começar! Acredito que o desejo ou a necessidade de entrar em um processo terapêutico ou de análise, diante de alguma dificuldade, sofrimento ou interesse em se conhecer, já são motivos suficientes para buscar atendimento.
        "
      />
      <Section
        image={require("./assets/sebs.jpg")}
        alt="Sebastião Venâncio"
        label="Serviços"
        text="Atendimento psicológico e psicanalítico de adolescentes, adultos e idosos. Os atendimentos podem ser realizados de maneira remota, a partir de plataformas que assegurem o sigilo dos atendimentos, ou de maneira presencial, realizados na Asa Sul, em Brasília.
        Tenho experiência no trabalho com diversas demandas, dentre elas: transtornos de personalidade e afetivos (como bipolaridade e borderline), depressão, ansiedade, luto, problemas em relacionamentos, timidez, autoimagem, comportamento de automutilação, suicídio, vícios, dentre outros."
      />
      <Section
        image={require("./assets/sebs.jpg")}
        alt="Sebastião Venâncio"
        label="Contato"
        text="Agende sua sessão ou mande uma mensagem para tirar dúvidas :)
        (61) 983733961
        sebsvenancio.psi@gmail.com
        SEPS 705/ 905 Sul Ed. Mont Blanc, Sala 140 – Asa Sul, Brasília
        Pré-agendamento:
        https://forms.gle/5XMoLTPF9yMgoJaf7"
      />
    </div>
  )
}

export default App
