import React from 'react'
import { Container, User, Wrapper } from './style'
import user from '../../../../assets/imgs/owner.jpg'

const CommentCard = ({Comment,userName, jobTitle}) => {
  return (
    <Container>
        <p className='description'>
          {Comment || " I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends "}
        </p>
        <Wrapper>
          <User src={user} alt="user"/>
          <h1 className='sub-title'>{userName || 'Marvin McKinney'}</h1>
          <p className='small-description'>{jobTitle || 'Designer'}</p>
        </Wrapper>
    </Container>
  )
}

export default CommentCard