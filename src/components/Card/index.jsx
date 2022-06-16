import React from 'react'
import { Container,Img, InfoWrapper,Icon, Details,Owner, ForSale,Footer, PriceSection, OldPrice, Characters, IconWrapper, Featured } from './style'
import notAvailable from '../../assets/imgs/not_available.png'
import noUser from '../../assets/imgs/owner.jpg'
const Card = ({info, mr}) => {
  return (
    <Container mr={mr}>
      <Img src={info?.attachments[0]?.imgPath || notAvailable}/>
      <Featured>Featured</Featured>
      <ForSale>For Sale</ForSale>
      <Owner src={info?.owner || noUser}/>
      <InfoWrapper>
        <div style={{whiteSpace: 'nowrap', overflow:'hidden'}} className='sub-title'>{info?.description || 'New Apartment Nice Wiew'}</div>
        <p className='small-description'>{info?.address || 'Quincy St, Brooklyn, NY, USA'}</p>
        <Details>
          <Details.Item>
            <Icon.Bed/>
            <span className='small-description'>{info?.houseDetails?.room || 0} bed</span>
          </Details.Item>
          <Details.Item>
            <Icon.Bath/>
            <span className='small-description'>{info?.houseDetails?.bath || 0} bath</span>
          </Details.Item>
          <Details.Item>
            <Icon.Car/>
            <span className='small-description'>{info?.houseDetails?.garage || 0} car</span>
          </Details.Item>
          <Details.Item>
            <Icon.Ruler/>
            <span className='small-description'>{info?.houseDetails?.area || 0} Sq Ft</span>
          </Details.Item>
        </Details>
      </InfoWrapper>
      <Footer>
        <PriceSection>
          <OldPrice>{info?.oldPrice || '$2,800/mo'}</OldPrice>
          <span className='sub-title'>{`$${info?.price}` || '$7,500/mo'}</span>
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