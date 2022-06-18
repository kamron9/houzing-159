import React from 'react'
import Filter from '../Filter'
import Recommended from './Recommended'
import Carousel from './Carousel'
import Choose from './ChooseInfo'
import Category from './Category'
import FarmHouse from './FarmHouse'
import Comments from './Comments'
import Footer from '../Footer'

const Home = () => {
  return (
    <div>
      <Filter />
      <Carousel />
      <Recommended/>
      <Choose/>
      <Category/>
      <FarmHouse/>
      <Recommended title={'Recent Properties for Rent'}/>
      <Comments/>
      <Footer/>
    </div>
  )
}

export default Home