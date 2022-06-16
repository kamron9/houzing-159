import React from 'react'
import { Container, Img, Wrapper } from './style'
import home2 from '../../../assets/imgs/home2.png'
import { Button } from '../../Generic'

const FarmHouse = () => {
  return (
    <Container>
        <Img src={home2} alt="home img"/>
        <Wrapper>

            <h1 className='title'>Vermont Farmhouse With Antique Jail Is
            the Week's Most Popular Home</h1>
            <Button mt={48} width={'180px'} type={'primary'}>Read more</Button>
        </Wrapper>
    </Container>
  )
}

export default FarmHouse