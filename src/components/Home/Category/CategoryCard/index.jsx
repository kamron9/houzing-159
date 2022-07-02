import React from 'react'
import { Icon, Img, Title, Wrapper } from './style'
import apartment  from '../../../../assets/imgs/apartment.png'
import {ReactComponent as Office} from '../../../../assets/icons/office.svg'
import { useNavigate } from 'react-router-dom'

const CategoryCard = (props) => {
  const navigate = useNavigate()
  const goTo = ()=>{
    navigate(`/properties?category_id=${props.id}`)
  }
  return (
    <Wrapper onClick={goTo} style={{marginRight:`${props.mr}px`}}>
        <Img src={props?.img || apartment}/>
        <Icon>{props?.Icon || <Office/>}</Icon>
        <Title>{props.title || 'no title'}</Title>
    </Wrapper>
  )
}

export default CategoryCard