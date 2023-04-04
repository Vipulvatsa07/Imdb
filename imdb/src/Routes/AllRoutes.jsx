import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Components/Home/HomePage'

import Movie from '../Components/Movies/Movies'
import SingleMovie from '../Components/SingleMoviePage/SingleMovie'

const AllRoutes = () => {

  return (
    <div>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='movie/:id' element={<SingleMovie/>}/>
          <Route path='movies/:type' element={<Movie/>}/>
          <Route path='/*' element={<h1>No hello world</h1>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes