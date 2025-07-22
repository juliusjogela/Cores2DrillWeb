import logo from "./assets/logo.png"
import './App.css'
import Header from "./components/header"

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
        <h1>Hi, Welcome to Cores2Drill</h1>
      </div>
    </div>
  </div>





  )
}

export default App
