import styled from "styled-components";
import { ReactComponent as Home } from '../../assets/icons/home.svg'
import { ReactComponent as Settings } from '../../assets/icons/settings.svg'
import { ReactComponent as Search } from '../../assets/icons/search.svg'

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
const Icon = styled.div``

Icon.Home = styled(Home)`
margin-right: 8px;
	margin-top: 6px;
`
Icon.Settings = styled(Settings)`
  margin-right: 8px;
`

Icon.Search = styled(Search)`
  margin-right: 8px;
`
const Form = styled.div`
  max-width: 1440px;
  padding: 0 20px;
  height: 64px;
  display: flex;
  align-items: center;
  width: 100%;
`

const Advanced = styled.div`
width: fit-content;
height: fit-content;
text-transform: capitalize;
`
Advanced.Title = styled.h2`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
color: #0D263B;
`
Advanced.Input = styled.div`
display: flex;
gap: 20px;
margin-bottom: 20px;
`

Advanced.Btn = styled.div`
display: flex;
gap: 20px;
justify-content: flex-end;`
export { Container, Form, Icon, Advanced }