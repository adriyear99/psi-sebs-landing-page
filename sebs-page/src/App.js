import './App.css'

// Componentes
import Header from './components/Header'
import Main from './components/Main'
import Whatsapp from './components/Whatsapp'
import Sobre from './components/Sobre'
import Abordagem from './components/Abordagem'
import Servicos from './components/Servicos'
import Perguntas from './components/Perguntas'


const App = () => {
  return (
    <div className="app no-padding">
      <Header/>
      <Main/>
      <Whatsapp/>
      <Sobre/>
      <Abordagem/>
      <Servicos/>
      {/* <Perguntas/> */}
      {/* <Section
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
      /> */}
    </div>
  )
}

export default App
