import React from 'react'
import './App.css';
import Slider from 'react-slick';
import MaltiDATA from './MaltiData';
function MultiCorousel() {
    
  return (
    <div style={{margin:"30px"}}>
      
      <Slider autoplay 
      autoplaySpeed={3000}
      slidesToShow={4}
      // prevArrow={<PreviousBtn/>}
      // nextArrow={<NextBtn/>}
      slidesToScroll={3}
      >
       
       {MaltiDATA.map((item)=>(
        <div className='text-center col-md-3 col-sm-4 col-6 m-3 p-2'>
          <div className='card'>
          <img  src={item.image} alt="" className='card-img-top' />
          <p className='fw-bolder mt-2 fs-small' style={{color:"green"}}>{item.title}</p>
          <p className='fw-bolder fs-small' style={{color:"red"}}>Rs:{item.price}</p>
          {/* <button className='btn btn-outline-success btn-sm btn-rounded mb-2'>BUY NOW</button> */}
         <div className="button">
          <button className='btn btn-outline-primary mb-2 btn-rounded btn-sm'>Buy Now</button>
         </div>
          </div>
          
        </div>
       ))}
          
       
          
      </Slider>
      
    </div>
  
  )
}

export default MultiCorousel;
