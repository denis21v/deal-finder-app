import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/page/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Footer from './components/page/Footer'
import Game from './pages/Game'
import { DealProvider } from './context/deal/DealContext'

function App() {
  return (
    <DealProvider>
      <Router>
        <div className='layout'>
          <Navbar />
          <main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/not-found' element={<NotFound />} />
              <Route path='*' element={<NotFound />} />
              <Route path='/game/:id' element={<Game />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </DealProvider>
  )
}

export default App
