import React, { useEffect, useState } from "react";
import { Container, ImageArea, DivButtons } from "./Colections.styles";
import {paisagem, paisagem2, paisagem3, nextArrow, backArrow} from "../../assets";

export const Colections: React.FC = () => {
  // const ListImages = [paisagem, paisagem2, paisagem3];
  const[slide, setSlide] = React.useState(0);
  const[paused, setPaused] = useState(false);

  const onNextButtonClick = () => {
    if(slide > 1){
      setSlide(0);
    }else{
      setSlide(slide+1);
    };
  };

  const onReturnButtonClick = () => {
    if(slide < 1){
      setSlide(2);
    }else{
      setSlide(slide-1);
    };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if(!paused){ 
        if(slide > 1){
          setSlide(0);
        }else{
          setSlide(slide+1);
        };
      };
    },3000);
    return () =>{
      if(interval){
        clearInterval(interval);
      }
    };
  });

  return (
    <Container>
      <h1>Coleções</h1>
      <ImageArea>
      <button onClick={onReturnButtonClick}><img src={backArrow} alt="return" /></button>
        <ul>
          <div style={{transform: `translateX(calc(-100%*(1/3)*${slide}))`}}          
          >
            <li><img src={paisagem}/></li>
            <li><img src={paisagem2}/></li>
            <li><img src={paisagem3}/></li>
          </div>
        </ul>
        <button onClick={onNextButtonClick}><img src={nextArrow} alt="next" /></button>
      </ImageArea>
      <DivButtons>
        <div>
          <button onClick={()=>setSlide(0)} style={slide == 0?{background:"#454545"}:{background:"#D9D9D9"}}></button>
          <button onClick={()=>setSlide(1)} style={slide == 1?{background:"#454545"}:{background:"#D9D9D9"}}></button>
          <button onClick={()=>setSlide(2)} style={slide == 2?{background:"#454545"}:{background:"#D9D9D9"}}></button>
        </div>
      </DivButtons>
    </Container>
  );  
};
