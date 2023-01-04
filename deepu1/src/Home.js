import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import DATA from './Data';

function Home() {
 
  // const previousBtn=(props)=>{
  //   const {className,onclick}=props;
  //   return(
  //     <div className='className={className} onClick={onClick}'>
  //      <AiFillCaretLeft/>
  //     </div>
  //   )
  // }
  // const nextBtn=(props)=>{
  //   return(
  //     <div className='className={className} onClick={onClick}'>
  //      <AiFillCaretRight style={{color:"blue"}}/>
  //     </div>
  //   )
  // }
  

   
    return (
      <div style={{margin:"30px"}}>
        <Slider
      autoplay 
      autoplaySpeed={2000}
      prevArrow={<previousBtn/>}
      nextArrow={<nextBtn/>}>  
       {DATA.map((item)=>(
        <div>
          <img src={item.image} alt="" style={{width:"100%",height:"50vh",objectfit:"cover"}}/>
        </div>
       ))}
           
        </Slider>
       
      </div>
    );
  
}

export default Home
