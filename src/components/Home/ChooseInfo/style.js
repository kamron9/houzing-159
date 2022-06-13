import styled from "styled-components";
import { ReactComponent as discord } from '../../../assets/icons/discord.svg'
import { ReactComponent as house } from '../../../assets/icons/house.svg'
import { ReactComponent as calculator } from '../../../assets/icons/calculator.svg'
import { ReactComponent as maps } from '../../../assets/icons/maps.svg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 435px;
  width: 100%;
  background: #F5F7FC;
  padding: 48px 0;
  .sub-title{
    font-size: 18px;
    font-weight: bold;
  }
`
const Wrapper = styled.div`
  display: flex;
  max-width: 1400px;
  margin-top: 25px;
  width: 100%;
  justify-content: space-evenly;
`
const Section = styled.section`
  text-align: center;
  max-width: 250px;
`
const Icon = styled.div``;

Icon.Discord = styled(discord)``
Icon.House = styled(house)``
Icon.Calculator = styled(calculator)``
Icon.Maps = styled(maps)``


export { Container, Wrapper, Section, Icon }