import { Route, Routes, HashRouter } from 'react-router-dom';
import Hamza from './components/Hamza'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Project from './components/Project'
import Dashboard from './components/Dashboard'
import './App.scss'

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Hamza />} />
            <Route path="about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
