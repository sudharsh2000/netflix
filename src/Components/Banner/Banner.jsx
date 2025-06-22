import React, { useState,useEffect, useRef, useContext } from 'react'
import './Banner.css'
import "font-awesome/css/font-awesome.min.css";
import axios from 'axios';
import { discover_url,api_key, img_url } from '../../constants';
import YouTube from 'react-youtube';
import { authcontext } from '../../App';
import { useNavigate } from 'react-router';
function Banner() {
  const {user}=useContext(authcontext)
  const [banner,setBanner]=useState({})
  const [ytid,setyoutube]=useState(0)
  const navigate=useNavigate()
  let i=9;
  useEffect(()=>{
    

    axios.get(discover_url).then(

      response=>{
        setBanner(response.data.results[i])
       
      }
    ).catch(er=>console.log(er))
    // if(i<20){
   
  },[])
  const imgstyle=`url(${img_url}${banner.backdrop_path})`
const getid=(id)=>{
  if(user){
  axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=32b9f70d2b6de49f0fd9183fe529b2cf`)
  .then(response=>setyoutube(response.data.results[0].key))
  }
  else{
    
    navigate('/login')
  }
}
  const opts = {
    height: '100%',
    width: '1800',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <div className='banner' style={{backgroundImage:imgstyle}}>
     {ytid ? <YouTube videoId={ytid} opts={opts}  />:''}
        <div className='shade'>
        <div className='content'>
            <h2 className='title'>{banner?banner.title:''}</h2>
            <div className='description'>{banner?banner.overview:''} </div>
            <div className="button-grp">
                <button onClick={()=>getid(banner.id)}><i className='fa fa-play' style={{fontSize:'16px',marginRight:'.5rem'}}></i> Play</button>
                <button className='info-btn'> <span>&#9432;</span>  More Info</button>
            </div>
           
        </div>
        </div>
    </div>
  )
}

export default Banner 

