import React, { useEffect, useState } from 'react'
import { useParams} from "react-router-dom"
const SingleMovie = () => {
    const [singleMovie,setSingleMovie]=useState([])
    const {id}=useParams()
    useEffect(()=>{
        getData()

    },[])

    const getData=()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res=>res.json())
        .then((res)=>{setSingleMovie(res)
        console.log(res)})
    }
  return (
    <div>
        
           
                <div>
                    <h1>{singleMovie.original_title}</h1>
                </div>
            
        
    </div>
  )
}

export default SingleMovie