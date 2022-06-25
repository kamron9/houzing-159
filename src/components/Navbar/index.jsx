import React from 'react'
import { navbar } from '../../utils/navbar'
import { useNavigate, Outlet } from 'react-router-dom'
import { Container, Header, Wrapper, Nav, Logo } from './style'
import { Button } from '../Generic'


const Navbar = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <Header>
        <Wrapper>
          <Logo onClick={() => navigate('/home')}>
            <Logo.Icon />
            <Logo.Title>Houzing</Logo.Title>
          </Logo>
          <Nav>
            {
              navbar.map(({ id, path, title, hidden }) => {
                return !hidden &&(
                  <Nav.Link to={path} key={id}>{title}</Nav.Link>
                )
              })
            }
          </Nav>
          <Button onClick={() => navigate('/signin')}width='120px'>Login</Button>
        </Wrapper>
      </Header>
      <Outlet />
    </Container>
  )
}

export default Navbar