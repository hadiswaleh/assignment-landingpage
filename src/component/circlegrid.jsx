import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Slider from "react-slick";


const settings = {
    dots: false,
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    centerMode:true,
    centerPadding:40
  };

 function CircleGrid(props) {
  return (  


    <div>
        <Slider {...settings}>
       
        { props.circleimage.map((img,index)=>(
            <Grid>
            <img src={img.imgPath} />
            { console.log(img.imgPath)}
            </Grid>
         ))}
         
    
        </Slider>
      </div>
    
  );
}

export default CircleGrid;
