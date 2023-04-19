import './Global.css'
import './App.css'

import { Course } from './components/course'
import { Classes } from './components/footer'
import { Header } from './components/header/'
import { Presentation } from './components/presentation/'
import { Resume } from './components/resume/'

function App() {
  return (
    <div>
      <Header />
      <Presentation />
      <Course />
      <Resume />
      <Classes />
    </div>
  )
}

export default App
