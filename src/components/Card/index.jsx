import React from 'react'
import { Container,Img, InfoWrapper,Icon, Details,Owner, ForSale,Footer, PriceSection, OldPrice, Characters, IconWrapper, Featured } from './style'
import notAvailable from '../../assets/imgs/not_available.png'
import noUser from '../../assets/imgs/owner.jpg'
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
const Card = ({info, mr}) => {
  return (
    <SkeletonTheme baseColor="#e4d4d4" highlightColor="#bbb3b3">
    <Container mr={mr}>
      <Img src={info?.attachments[0]?.imgPath || notAvailable}/>
      <Featured>Featured</Featured>
      <ForSale>For Sale</ForSale>
      <Owner src={info?.owner || noUser}/>
      <InfoWrapper>
        <div style={{whiteSpace: 'nowrap', overflow:'hidden'}} className='sub-title'>{info?.name || <Skeleton count={1}/>}</div>
        <p className='small-description' style={{whiteSpace: 'nowrap', overflow:'hidden'}}>{info?.country &&  info?.country +','} {info?.region && info?.region +','} {info?.city &&  info?.city +','} {info?.address} </p>
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
          <OldPrice>${info?.salePrice ||  0}</OldPrice>
          <span className='sub-title'>${info?.price || 0}</span>
        </PriceSection>
        <Characters>
          <Icon.Resize />
          <IconWrapper>
            <Icon.Like/>
          </IconWrapper>
        </Characters>
      </Footer>
    </Container>
    </SkeletonTheme>
  )
}

export default Card

const info = {
  img:''
}
