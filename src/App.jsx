import './App.scss'
import Caro from './component/Caro/Caro'
import Doit from './component/Doit/Doit'
import Front from './component/Front/Front'
import Nav from './component/Nav/Nav'
import Pacific from './component/Pacific/Pacific'
import Ready from './component/Ready/Ready'
import Second from './component/Second/Second'
import Testmono from './component/Testmono/Testmono'
import Welcome from './component/Welcome/Welcome'

function App() {

  return (
    <div className='app'>
    <Nav/>
    <Front/>
    <Second/>
    <Testmono/>
    <Doit/>
    <Pacific/>
    <Caro/>
    <Welcome/>
    <Ready/>
    </div>
  )
}

export default App
