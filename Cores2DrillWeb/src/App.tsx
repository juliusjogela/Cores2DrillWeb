import logo from "./assets/logo.png"
import './App.css'
import Header from "./components/header"
import vans from "./assets/cores2drill.png"

function App() {
  return (
   <div className="app-container">
    <Header />
    {/*Welcome section*/}
    <div className = "welcome-section">
      <div>
        <img src={logo} alt="Cores2Drill Logo" className="cores2drill-logo"/>
      </div>
      <div className = "welcome-text">
      <h1>Cores2Drill!</h1>
      <p>We are a leading diamond core drilling company operating all over Ireland</p>
      </div>
        <img src={vans} alt="Cores2Drill Vans" className="cores2drill-vans"/>
    </div>
  </div>





  )
}

export default App
