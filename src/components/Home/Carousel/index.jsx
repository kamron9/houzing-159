import React,{useRef} from 'react'
import { Container,Icon,Img ,Wrapper} from './style'
import home1 from '../../../assets/imgs/home1.png'
import home2 from '../../../assets/imgs/home2.png'

const Carousel = () => {
  const slider = useRef('click')
  console.log(slider);
  return (
    <Wrapper>
    <Icon.Left onClick={()=>slider.current.prev()}/>
    <Icon.Right onClick={()=>slider.current.next()}/>
    <Container  autoplay ref={slider}>
      <Img src={home1}/>
      <Img src={home2}/>
    </Container>
    </Wrapper>
  )
}

export default Carousel