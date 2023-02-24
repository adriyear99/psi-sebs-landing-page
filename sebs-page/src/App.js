import './App.css'

// Componentes
import Header from './components/Header'
import Main from './components/Main'
import Whatsapp from './components/Whatsapp'
import Sobre from './components/Sobre'
import Abordagem from './components/Abordagem'
import Servicos from './components/Servicos'
import Perguntas from './components/Perguntas'
import Contato from './components/Contato'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className="app no-padding">
      <Header/>
      <Main/>
      <Whatsapp/>
      <Sobre/>
      <Abordagem/>
      <Servicos/>
      <Perguntas/>
      <Contato/>
      <Footer/>
    </div>
  )
}

export default App
