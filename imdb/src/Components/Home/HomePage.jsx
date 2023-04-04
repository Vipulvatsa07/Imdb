import React from 'react'
import "./HomePage.css"
import { useEffect } from 'react'
import { useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {Link} from "react-router-dom"
import Movie from '../Movies/Movies';

const HomePage = () => {
const [popular,setPopular]=useState([])
 const getData=()=>{
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
    .then(res=>res.json())
    .then((res)=>{console.log(res.results)
    setPopular(res.results)})
 }

useEffect(()=>{
    getData()
 
},[])

  return (
    <div className='slider'>
<Carousel 
showThumbs={false}
autoPlay={true} 
transitionTime={3}
infiniteLoop={true}
showStatus={false}>
{
    popular.map(movie=>(
        <Link to={`/movie/${movie.id}`}>
        <div className='posterImage'>
           <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="imagewa" />
            {/* <span>{movie.original_title}</span> */}
        </div>
        <div className='posterOverview'>
    <div className='posterTitle'>
         {movie?movie.original_title:" "}
    </div>
    <div className='posterRelease'>
         <span>{movie?movie.release_date:" "}</span>
         <span className='rating'>{movie?movie.vote_average:" "}
         <i className='fas fa-star'/></span>
    </div>
    <div className='description'>{movie?movie.overview:""}</div>
        </div>
        </Link>
    ))
}

</Carousel>
<Movie/>
    </div>
  )
}

export default HomePage