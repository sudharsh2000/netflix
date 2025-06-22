import React, { useContext, useEffect, useState } from 'react'
import './movie.css'
import { moviecontext } from '../Rowitem/Rowitem'
import axios from 'axios'
import { img_url } from '../../constants'
import { useNavigate } from 'react-router'
 function Movie() {
    const {setMoviecard,cardid}=useContext(moviecontext)
    const [moviedetail,setmoviedetail]=useState([])
    const navigate=useNavigate()

    useEffect(()=>{
      axios.get(`https://api.themoviedb.org/3/movie/${cardid}?api_key=32b9f70d2b6de49f0fd9183fe529b2cf`)
      .then(response=>{
        setmoviedetail(response.data)
        console.log(response.data)
      })
      
    },[cardid])
    const moviegenre=moviedetail.genres
    const imgstyle=`url(${img_url}${moviedetail.backdrop_path})`
    const posterstyle=`url(${img_url}${moviedetail.poster_path})`
    const re =moviedetail.release_date;
   // console.log(str?.toString().slice(0,4))

  return (
    <div className='main-movie' >
    
        <div className='movie-image' style={{backgroundImage:imgstyle}}>
        <div className='movie-shade'>
          <button className='close-btn' onClick={()=>setMoviecard(false)}>X</button>
            <h1>{moviedetail.title}</h1>
        </div>
        </div>
        <div className='movie-detail'>
          <span>{moviedetail.release_date?.toString().slice(0,4)}</span>
         
          {moviedetail? moviedetail.genres?.map((genre,index)=>{
            return <span key={genre.index}>{genre.name}</span>
          }):''}
          
      
            <div className='movie-desc'>{moviedetail?moviedetail.overview:''}</div>
            <div className="button-grp">
                <button onClick={()=>navigate("/signup")}>Get Started    </button>
                
            </div>
            </div>
           
        
       
    </div>
  )
}
export  {Movie}

