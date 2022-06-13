import React from 'react'
import { Container, Wrapper,Section ,Icon} from './style'


const Choose = () => {
  return (
    <Container>
      <h1 className='title'>Why Choose Us</h1>
      <p className='description text-center'>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
      <Wrapper>
        <Section>
          <Icon.Discord/>
          <h2 className="sub-title">Trusted By Thousands</h2>
          <p className='description'>With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</p>
        </Section>
        <Section>
          <Icon.House/>
          <h2 className="sub-title">Wide Renge Of Properties</h2>
          <p className='description'>With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</p>
        </Section>
        <Section>
          <Icon.Calculator/>
          <h2 className="sub-title">Financing Made Easy</h2>
          <p className='description'>With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</p>
        </Section>
        <Section>
          <Icon.Maps/>
          <h2 className="sub-title">See Neighborhoods</h2>
          <p className='description'>With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</p>
        </Section>
      </Wrapper>
    </Container>
  )
}

export default Choose