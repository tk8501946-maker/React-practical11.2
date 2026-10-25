import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'

function HomePage() {
  return (
    <section className="page">
      <p className="eyebrow">Welcome</p>
      <h1>Home</h1>
      <p>
        This is the home page. Use the navigation links to move between pages
        without reloading the full website.
      </p>
    </section>
  )
}

function AboutPage() {
  return (
    <section className="page">
      <p className="eyebrow">Our story</p>
      <h1>About</h1>
      <p>
        We build simple, modern React experiences with client-side routing that
        feels fast and smooth for users.
      </p>
    </section>
  )
}

function ContactPage() {
  return (
    <section className="page">
      <p className="eyebrow">Get in touch</p>
      <h1>Contact</h1>
      <p>Email: hello@example.com</p>
      <p>Phone: +1 (555) 123-4567</p>
    </section>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <nav className="navbar">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </nav>

        <main className="page-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
