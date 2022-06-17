import React,{useRef} from 'react'
import Card from '../../Card'
import AliceCarousel from 'react-alice-carousel';

import { Carousel, Container, Wrapper,Icon } from './style'


const Recommended = ({title}) => {
  const ref = useRef('click')
  const handleDragStart = (e) => e.preventDefault();
  const cards =[ 
  <Card mr={20} onDragStart={handleDragStart} role="presentation"/>,
  <Card mr={20} onDragStart={handleDragStart} role="presentation"/>,
  <Card onDragStart={handleDragStart} role="presentation"/>,
  <Card onDragStart={handleDragStart} role="presentation"/>,
  <Card onDragStart={handleDragStart} role="presentation"/>,
  <Card onDragStart={handleDragStart} role="presentation"/>,
]
const responsive =    {
  0: {
      items: 1,
  },
  1024: {
      items: 3
  }
}
  return (
    <Container>
      <h1 className='title'>{title || "Recommended"}</h1>
      <p className='description'>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
      <Wrapper>
        <Icon.Left onClick={()=>ref.current.slidePrev()}/>
        <Icon.Right onClick={()=>ref.current.slideNext()}/>
        <Carousel>
          <AliceCarousel ref={ref} disableButtonsControls={true} keyboardNavigation={true} mouseTracking controlsStrategy="alternate"  infinite={true} responsive={responsive} items={cards}/>
        </Carousel>
      </Wrapper>
    </Container>
  )
}

export default Recommended