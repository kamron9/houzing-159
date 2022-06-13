import React from 'react'
import { Container,Img, InfoWrapper,Icon, Details,Owner, ForSale,Footer, PriceSection, OldPrice, Characters, IconWrapper, Featured } from './style'
import notAvailable from '../../assets/imgs/not_available.png'
import noUser from '../../assets/imgs/owner.jpg'
const Card = ({info, mr}) => {
  return (
    <Container mr={mr}>
      <Img src={info?.img || notAvailable}/>
      <Featured>Featured</Featured>
      <ForSale>For Sale</ForSale>
      <Owner src={info?.owner || noUser}/>
      <InfoWrapper>
        <div className='sub-title'>{info?.cardTitle || 'New Apartment Nice Wiew'}</div>
        <p className='small-description'>Quincy St, Brooklyn, NY, USA</p>
        <Details>
          <Details.Item>
            <Icon.Bed/>
            <span className='small-description'>{info?.bed || 0} bed</span>
          </Details.Item>
          <Details.Item>
            <Icon.Bath/>
            <span className='small-description'>{info?.bath || 0} bath</span>
          </Details.Item>
          <Details.Item>
            <Icon.Car/>
            <span className='small-description'>{info?.car || 0} car</span>
          </Details.Item>
          <Details.Item>
            <Icon.Ruler/>
            <span className='small-description'>{info?.ruler || 0} Sq Ft</span>
          </Details.Item>
        </Details>
      </InfoWrapper>
      <Footer>
        <PriceSection>
          <OldPrice>{info?.oldPrice || '$2,800/mo'}</OldPrice>
          <span className='sub-title'>{info?.oldPrice || '$7,500/mo'}</span>
        </PriceSection>
        <Characters>
          <Icon.Resize />
          <IconWrapper>
            <Icon.Like/>
          </IconWrapper>
        </Characters>
      </Footer>
    </Container>
  )
}

export default Card

const info = {
  img:''
}