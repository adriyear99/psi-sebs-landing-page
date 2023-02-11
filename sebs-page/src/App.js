import './App.css'

// Componentes
import Header from './components/Header'
import Main from './components/Main'
import Whatsapp from './components/Whatsapp'
import About from './components/About'
import Abordagem from './components/Abordagem'
import Perguntas from './components/Perguntas'
import Servicos from './components/Servicos'
import Contato from './components/Contato'

const App = () => {
  return (
    <div className="app no-padding">
      <Header/>
      <Main/>
      <Whatsapp/>
      <About/>
      <Abordagem/>
      <Perguntas/>
      <Servicos/>
      <Contato/>
    </div>
  )
}

export default App
