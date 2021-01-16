import { Fab } from '@material-ui/core';
import React, { useEffect, useRef } from 'react'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import useStyles from './Styles';

const ScrollTop = () => {
  const classes = useStyles();
  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);

    return () =>  window.removeEventListener('scroll', scrollHandler);
 }, []);

 const scroll = useRef(null);

 const scrollToTop = (y, duration) => {
   const initialY = document.documentElement.scrollTop || document.body.scrollTop;
   const baseY = (initialY + y) * 0.5;
   const difference = initialY - baseY;
   const startTime = performance.now();

   const step = () => {
     let normalizedTime = (performance.now() - startTime) / duration;
     if (normalizedTime > 1) normalizedTime = 1;

     window.scrollTo(0, baseY + difference * Math.cos(normalizedTime * Math.PI));
     if (normalizedTime < 1) window.requestAnimationFrame(step);
   };
   window.requestAnimationFrame(step);
 };

 const scrollHandler = () => {
   if (window.pageYOffset >= 500) {
     scroll.current.style.transform = 'scale(1)';
   } else {
     scroll.current.style.transform = 'scale(0)';
   }
 }
  return (
    <Fab 
    color="primary"
    size="small" 
    className={classes.scrollTop}
    onClick={() => scrollToTop(0, 400)}
    ref={scroll} 
    >
      <ArrowUpwardIcon/>
    </Fab>
  )
}

export default ScrollTop
