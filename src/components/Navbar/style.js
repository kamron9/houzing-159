import styled from "styled-components";
import { NavLink } from 'react-router-dom'
import { ReactComponent as navLogo } from '../../assets/icons/navLogo.svg'


const Container = styled.div``
const Header = styled.header`
    width: 100%;
    background-color: var(--primaryColor);
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-touch-callout: none; //IOS safari
    -webkit-user-select: none; //safari
    -khtml-user-select: none; //Konqueror HTML
    -moz-user-select: none; //firefox old version
    -ms-user-select: none; // internet explorer/ Edge
    user-select: none; //Non-prefixed version, supported by chrome,firefox and opera
`
const Wrapper = styled.div`
	display: flex;
	align-items: center;
	padding: 0 20px;
	justify-content: space-between;
	max-width: 1440px;
	height: 64px;
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 24px;
	width: 100%;
	color: #ffffff;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`
Logo.Icon = styled(navLogo)``

Logo.Title = styled.span`
 	display: inline-block;
	font-weight: 600;
	font-size: 22px;
	color: white;
	margin-left: 10px;
`


const Nav = styled.nav`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  .active {
		color: #00fff5;
	}
`;
Nav.Link = styled(NavLink)`
  font-family: 'Montserrat';
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	margin: 0 32px;
	line-height: 24px;
	text-decoration: none;
	color: #ffffff;
`;
export { Container, Header, Wrapper, Nav, Logo }