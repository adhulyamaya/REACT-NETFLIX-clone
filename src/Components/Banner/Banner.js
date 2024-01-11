import React, { useEffect, useState } from 'react'
import {API_KEY,imageUrl} from '../../Constants/Constants'
import axios from '../../axios'
import './Banner.css'


function Banner() {
  const[movie,setMovie] = useState()
  // useEffect(()=>{
  //   axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>
  //   {
  //     console.log(response.data.result[0])
  //     setMovie(response.data.result[0])
  //   })

  // },[])
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      if (response.data.results && response.data.results.length > 0) {
        console.log(response.data.results[0]);
        setMovie(response.data.results[0]);
      } else {
        console.error("No results found in the response data.");
      }
    }).catch((error) => {
      console.error("Error fetching data:", error);
    });
  }, []);
  
  return (
    <div 
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:""})`}}
     className='banner'>
      <div className='content'>
        <h1 className='title'>{movie ? movie.title :""}</h1>
        <div className='banner_button'>
          <button className='button '> Play</button>
          <button className='button '> My List</button>
        </div>
        <h1 className='description'>{movie ? movie.overview:""}</h1>
      </div> 
      <div className='fade_botton'></div> 



    </div>
  )
}

export default Banner
