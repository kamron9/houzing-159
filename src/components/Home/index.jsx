import React from 'react'
import Filter from '../Filter'
import Recommended from './Recommended'
import Carousel from './Carousel'
import Choose from './ChooseInfo'
import Category from './Category'
const Home = () => {
  return (
    <div>
      <Filter />
      <Carousel />
      <Recommended/>
      <Choose/>
      <Category/>
    </div>
  )
}

export default Home