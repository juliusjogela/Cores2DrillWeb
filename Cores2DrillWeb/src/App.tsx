import logo from "./assets/logo.png"
import './App.css'
import vans from "./assets/cores2drill.png"
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      
      {/* Hero/Home Section */}
      <section id="home" className="hero-section">
      <img src={logo} alt="Cores2Drill Logo" className="hero-logo-corner"/>
        <div className="hero-content">
          <div className="hero-text">
            <h1>Cores2Drill</h1>
            <p className="hero-subtitle">Leading Diamond Core Drilling Company</p>
            <p className="hero-description">
              We are a leading diamond core drilling company operating all over Ireland, 
              providing professional drilling services for construction, engineering, and geological projects.
            </p>
          </div>
          <div className="hero-images">
            <img src={vans} alt="Cores2Drill Vans" className="company-vans"/>
          </div>
        </div>
      </section>
    
      {/* Gallery Section */}
      <section id="gallery" className="gallery-section">
        <div className="section-content">
          <h2>Our Work</h2>
          <p>Take a look at some of our recent projects and drilling operations across Ireland.</p>
          <div className="gallery-grid">
            <div className="gallery-item">
              <div className="gallery-placeholder">
                <h4>Residential Project</h4>
                <p>Foundation drilling</p>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">
                <h4>Commercial Site</h4>
                <p>Core sampling</p>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">
                <h4>Engineering Survey</h4>
                <p>Geological testing</p>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">
                <h4>Infrastructure</h4>
                <p>Structural analysis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-content">
          <h2>Get In Touch</h2>
          <p>Ready to start your next drilling project? Contact us for professional services across Ireland.</p>
          <div className="contact-grid">
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <h3>Phone</h3>
              <p>+353 89 232 3315</p>
            </div>
            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <h3>Email</h3>
              <p>cores2drill@gmail.com</p>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <h3>Service Area</h3>
              <p>All of Ireland</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App
