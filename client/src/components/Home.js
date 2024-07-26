import React, { useState } from 'react'
import first from "../Assets/Firstslide.png"
import second from "../Assets/secondslide.webp"
import third from "../Assets/thirdsilde.webp"
import fourth from "../Assets/fourthslide.webp"
import './Home.css'
import InternshipData from "./Data/InternshipDatAvl"
import { Link } from 'react-router-dom'

function Home() {
  const [currentSlide,setCurrentSlide]=useState(0)
  // const [internshipData,setInternshipData]=useState([])
  const [selectedCategory,setSelectedCategory]= useState("Big Brands")

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

      const handleSlideIntern=(direction)=>{
        const contianer=document.getElementById("container2");
        const step=100;
        if (direction==='left') {
            setCurrentSlide((preveSlibe)=>(preveSlibe>0 ?preveSlibe-1:0))
        }
        else{
            setCurrentSlide((preveSlibe)=>(preveSlibe<3 ?preveSlibe+1:3))
        }
        sideScrollIntern(contianer, direction, 25, step, 10)
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

<div className="infoys">
    <div className="info-intern">
        <div className="mt-16">
            <h1 className='text-center font-bold'>Latest internships on Intern Area</h1>
        </div>
        <div className="categories flex flex-wrap mt-14">
<p>POPULAR CATEGORIES :</p>
<span className={`category mr-4 ml-6 ${ selectedCategory==='Big Brands'?'bg-blue-500 text-white':""}`} onClick={()=>setSelectedCategory('Big Brands')}>Big Brands</span>
<span className={`category mr-4 ml-6 ${selectedCategory==="Work From Home"?'bg-blue-500 text-white':
""}`} onClick={()=>setSelectedCategory("Work From Home")}>Work From Home</span>
<span className={`category mr-4 ml-6 ${selectedCategory==="Part-time"?'bg-blue-500 text-white':
""}`} onClick={()=>setSelectedCategory("Part-time")}>Part-time</span>
<span className={`category mr-4 ml-6 ${selectedCategory==="MBA"?'bg-blue-500 text-white':
""}`} onClick={()=>setSelectedCategory("MBA")}>MBA</span>
<span className={`category mr-4 ml-6 ${selectedCategory==="Engineering"?'bg-blue-500 text-white':
""}`} onClick={()=>setSelectedCategory("Engineering")}>Engineering</span>
<span className={`category mr-4 ml-6 ${selectedCategory==="media"?'bg-blue-500 text-white':
""}`} onClick={()=>setSelectedCategory("media")}>Media</span>
<span className={`category mr-4 ml-6 ${selectedCategory==="Design"?'bg-blue-500 text-white':
""}`} onClick={()=>setSelectedCategory("Design")}>Design</span>
<span className={`category mr-4 ml-6 ${selectedCategory==="Data Science"?'bg-blue-500 text-white':
""}`} onClick={()=>setSelectedCategory("Data Science")}>Data Science</span>
        </div>
        </div>
        <div className="internships" id='container2'>
<div className="internShip-Info flex">
{
InternshipData.map(( data,index)=>(
      
        <div className="int-1 mt-6" key={index}>
<p className='mb-4 mt-3' id='boxer'> <i className='bi bi-arrow-up-right text-blue-500' ></i> Actively Hiring</p>
<p>{data.title}</p>
<small className='text-slate-400 text-sm'>{data.company}</small>
   
        <hr className='mt-5' />
        <p className='mt-3' ><i class="bi bi-geo-alt-fill"></i> {data.location}  </p>
        <p className='mt-1'> <i class="bi bi-cash-stack"></i> {data.stipend}</p>
        <p className='mt-1'><i class="bi bi-calendar-fill"></i> {data.Duration}</p>
        <div className='more flex justify-between mt-6'>
            <span className='bg-slate-200 text-slate-400 w-20 rounded-sm text-center'>Internship</span>
   {/* <Link to={`/detailInternship?q=${data._id}`}> */}
   <span className='text-blue-500 mr-2'> 
View details <i class="bi bi-chevron-right"></i>
   </span>
   {/* </Link> */}
        </div>
        </div>
        
        
    ))
}

</div>
        </div>
<div className="flex BUttons mt-9">
<button className='back' onClick={()=>handleSlideIntern('left')}> <i className='bi bi-chevron-left' id='sideBack'></i></button>
<button  className="next" onClick={()=>handleSlideIntern('right')}> <i className='bi bi-chevron-right' id='slide'></i></button>
</div>
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

function sideScrollIntern(element, direction,speed,distance,step){
    let scrollAmount=0;
    const slideTimer=setInterval(function(){
        if (direction==='left') {
            element.scrollLeft-=step
        }
        else{
            element.scrollLeft+=step
        }
        scrollAmount+=step;
        if(scrollAmount>=distance){
            window.clearInterval(slideTimer)
        }
    },speed)
}
