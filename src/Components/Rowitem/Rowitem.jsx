import React, { createContext, useEffect,useRef,useState } from 'react'
import './rowitem.css'
import { img_url, row_img_url } from '../../constants'
import axios from 'axios'
import { Movie } from '../Movie/Movie'

 const moviecontext=createContext()

function Rowitem({title,small}) {
  const rowRef=useRef(null)
    const [movie,setMovie]=useState([])
    const [moviecard,setMoviecard]=useState(false)
    const [cardid,setcarid]=useState()
   
    useEffect(()=>{
      let search_url='';
      if(title==='Popular On Netflix'){
         search_url='https://api.themoviedb.org/3/trending/all/day?api_key=32b9f70d2b6de49f0fd9183fe529b2cf&language=en-US'
      }
      else{
         search_url='https://api.themoviedb.org/3/movie/top_rated?api_key=32b9f70d2b6de49f0fd9183fe529b2cf&language=en-US&page=1'
                          
        
      }
     
        axios.get(search_url).then(
          response=>setMovie(response.data.results)
    
        ).catch(er=>console.log(er))
      },[])
   
      const scrollLeft = () => {
        rowRef.current.scrollBy({ left: -300, behavior: "smooth" });
      };
    
      const scrollRight = () => {
        rowRef.current.scrollBy({ left: 300, behavior: "smooth" });
      };
     let imgstyle= small?'row-small-img':'row-img'
  return (
    <div className='row-main'>
    {moviecard?
    
    <moviecontext.Provider value={{setMoviecard,cardid}}>

 
    <Movie/>
    </moviecontext.Provider>
    
    :''}
        <h4>{title}</h4>
        <div className="row-container" ref={rowRef}>
          <button className='prev-btn' onClick={()=>scrollLeft()}>&lt;</button>
          <button className='next-btn' onClick={()=>scrollRight()}>&gt;</button>
            {movie.map((mobj)=>{
                return <img src={row_img_url+mobj.backdrop_path} onClick={()=>{setMoviecard(true);setcarid(mobj.id)}} key={mobj.id} className={imgstyle} />
            })}
            
            
        </div>
      
    </div>
  )
}

export default Rowitem
export {moviecontext}
