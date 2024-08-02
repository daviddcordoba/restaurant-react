import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import Foods from './components/Foods'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div id="home">
      <Nav/>

      <main >
        <div   className='flex justify-center'>
          <Home/>
        </div>

        <div id="comidas">
          <Foods/>
        </div>

        <div id='contacto' className='pt-10'>
          <Contact/>
        </div>


      </main>

      <Footer/>
    </div>
  )
}

export default App