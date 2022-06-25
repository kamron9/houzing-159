import React, {useRef, useState} from 'react'
import CategoryCard from './CategoryCard'
import { Carousel, Container, Icon, Wrapper,Title } from './style'
import notAvailable from '../../../assets/imgs/not_available.png'
import {ReactComponent as Home} from '../../../assets/icons/homeGroup.svg'
import AliceCarousel from 'react-alice-carousel'
import { useQuery } from 'react-query'

const {REACT_APP_BASE_URL: url} = process.env
const Category = () => {
  const slider = useRef('click')
  const [data, setData] = useState([])
  const responsive =    {
    0: {
        items: 1,
    },
    1024: {
        items: 4
    }
  }
  const items = [
    <CategoryCard mr={20} title="house"/>,
    <CategoryCard Icon={<Home/>} mr={20} title="Apartment"/>,
    <CategoryCard  mr={20}/>,
    <CategoryCard  mr={20}/>,
    <CategoryCard  mr={20}/>,
    <CategoryCard  mr={20}/>,
    <CategoryCard  mr={20}/>,
  ]
  useQuery([],()=>{
    return fetch(`${url}v1/categories`,{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
    .then(res=>res.json())
  },{
    onSuccess:(res)=>{
      let response = res.data.map(value=><Title>{value}</Title>)
      setData(response)
    }
  })
  return (
    <Container>
      <h1 className='title'>Category</h1>
      <p className='description text-center'>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
      <Wrapper>
       <AliceCarousel disableButtonsControls={true}  controlsStrategy="alternate"  responsive={responsive} infinite={true}  items={data} ref={slider}/>
        <Icon.Left  onClick={()=>slider.current.slidePrev()}/>
        <Icon.Right  onClick={()=>slider.current.slideNext()}/>
      </Wrapper>
    </Container>
  )
}

export default Category