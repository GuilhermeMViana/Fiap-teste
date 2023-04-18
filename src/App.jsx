import './Global.css'
import { Header } from './components/header'
import { Presentation } from './components/presentation'
import { Career } from './components/career'
import { Resume } from './components/resume'

function App() {
  return (
    <div>
      <Header />
      <Presentation />
      <Career />
      <Resume />
    </div>
  )
}

export default App
