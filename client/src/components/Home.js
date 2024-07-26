import React, { useState } from 'react'
import first from "../Assets/Firstslide.png"
import second from "../Assets/secondslide.webp"
import third from "../Assets/thirdsilde.webp"
import fourth from "../Assets/fourthslide.webp"
import './Home.css'
function Home() {
  const [currentSlide,setCurrentSlide]=useState(0)

  const handleSlide=(direction)=>{
  const container=document.getElementById("container")
  const step=100
  if(direction==='left'){
    setCurrentSlide((prevslide)=>prevslide>0?prevslide-1:0)
  }else{
    setCurrentSlide((prevslide)=>prevslide<3?prevslide+1:0)
  }
   sideScroll(container,direction,25,step,10)
  }


  return (
    <div>
    <h1 className='text-center text-3xl font-bold mt-10'>
    Make your dream career a reality
    </h1>
    <p className='text-center text-lg font-bold'>
    Trending on InternArea 🔥
    </p>
    
    <div className='imgs flex justify-center' id='container'>
      <div className='slide flex mt-10 ' id='content'>
        <img className='slide_Img ml-4 ' src={first} alt=''></img>
        <img className='slide_Img ml-4' src={second} alt=''></img>
        <img className='slide_Img ml-4' src={third} alt=''></img>
        <img className='slide_Img ml-4' src={fourth} alt=''></img>

      </div>
    </div>
    
    <div className='flex BUttons'>
    <button className='back' onClick={()=>handleSlide('left')}><i className='bi bi-chevron-left' id='slideback'></i></button>
    <button className='next' onClick={()=>handleSlide('right')}><i className='bi bi-chevron-right' id='slide'></i></button>
    </div>

    </div>
  )
}

export default Home

function sideScroll(element,direction,speed,distance,step){
  var scrollAmount=0;
  const slideTimer=setInterval(()=>{
    if(direction=='left'){
      element.scrollLeft-=step
    }else{
      element.scrollLeft+=step
    }
    scrollAmount+=step
    if(scrollAmount>=distance){
      window.clearInterval(slideTimer)
    }
  },speed)
}
