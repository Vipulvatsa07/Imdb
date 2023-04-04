import { useState } from 'react'
import "./App.css"
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import AllRoutes from './Routes/AllRoutes'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { ChakraProvider as Chakra } from '@chakra-ui/react'



export const App=()=> {


  return (
    <div className="App">
      <Chakra>
      <Router>
        <Navbar/>
      <AllRoutes/>
      <Footer/>
      </Router>
      </Chakra>
   
    </div>
  )
}


