import React from 'react'
import Filter from '../Filter'
import Recommended from './Recommended'
import Carousel from './Carousel'
import Choose from './ChooseInfo'

const Home = () => {
  return (
    <div>
      <Filter />
      <Carousel />
      <Recommended/>
      <Choose/>
    </div>
  )
}

export default Home