import React from 'react'
import { Icon, Img, Title, Wrapper } from './style'
import apartment  from '../../../../assets/imgs/apartment.png'
import {ReactComponent as Office} from '../../../../assets/icons/office.svg'
const CategoryCard = (props) => {
  return (
    <Wrapper style={{marginRight:`${props.mr}px`}}>
        <Img src={props?.img || apartment}/>
        <Icon>{props?.Icon || <Office/>}</Icon>
        <Title>{props.title || 'no title'}</Title>
    </Wrapper>
  )
}

export default CategoryCard