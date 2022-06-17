import React,{useRef} from 'react'
import CommentCard from './CommentCard'
import { Container, Wrapper,Carousel,Icon } from './style'
import AliceCarousel from 'react-alice-carousel';

const Comments = () => {
    const ref = useRef('click')
    const handleDragStart = (e) => e.preventDefault();
    const cards = [
        <CommentCard onDragStart={handleDragStart} role="presentation"/>,
        <CommentCard onDragStart={handleDragStart} role="presentation"/>,
        <CommentCard onDragStart={handleDragStart} role="presentation"/>,
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
        <h1 className='title'>Testimonials</h1>
        <p className='description text-center'>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
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

export default Comments