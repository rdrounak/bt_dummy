import React from 'react'
import Header from './Header'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import NotFound from './NotFound'
import Contact from './Contact'
function App() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: 'auto 1fr',
        height: '100vh',
        overflowY: 'hidden',
      }}
    >
      <Header />
      <Routes>
        <Route>
          <Route path='/' element={<Home />}></Route>
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
