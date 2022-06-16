import styled from "styled-components";
import { ReactComponent as bed } from '../../assets/icons/bed.svg'
import { ReactComponent as bath } from '../../assets/icons/bath.svg'
import { ReactComponent as car } from '../../assets/icons/car.svg'
import { ReactComponent as ruler } from '../../assets/icons/ruler.svg'
import { ReactComponent as like } from '../../assets/icons/like.svg'
import { ReactComponent as resize } from '../../assets/icons/resize.svg'

const Container = styled.div`
  width: 380px;
  position: relative;
  height: 430px;
  background: #FFFFFF;
  border: 1px solid #E6E9EC;
  border-radius: 3px;
  margin-right: ${({ mr }) => `${mr}px`};
  :hover{
    -webkit-box-shadow: 0px 0px 25px 8px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 0px 25px 8px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 0px 25px 8px rgba(34, 60, 80, 0.2);
  }
`
const Img = styled.img`
  width: 100%;
  height: 220px;
`
const Featured = styled.span`
  position: absolute;
  z-index: 999;
  top: 20px;
  left: 20px;
  padding: 5px 12px;
  background: #0061DF;
  border-radius: 3px;
  color: white;
  text-transform: uppercase;
  user-select: none;
  font-weight: bold;
`
const ForSale = styled.span`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 999;
  padding: 5px 12px;
  background: #0D263B;
  border-radius: 3px;
  color: white;
  text-transform: uppercase;
  user-select: none;
  font-weight: bold;
`
const Owner = styled.img`
  position: absolute;
  right: 22px;
  top: 200px;
  width: 42px;
  height: 42px;
  border-radius:50%;
  border: 2px solid white;
  box-shadow: 0px 0px 10px rgba(13, 38, 59, 0.2);
`
const InfoWrapper = styled.div`
  padding: 25px 20px 15px 20px;
  border-top: 1px solid #E6E9EC;;
  border-bottom: 1px solid #E6E9EC;;
`
const Details = styled.div`
  display: flex;
  justify-content: space-between;
`
Details.Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Icon = styled.div``;
Icon.Bed = styled(bed)``;
Icon.Bath = styled(bath)``;
Icon.Car = styled(car)``;
Icon.Ruler = styled(ruler)``;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 20px;
`

const PriceSection = styled.section``
const OldPrice = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  text-decoration-line: line-through;
  color: #696969;
`

const Characters = styled.section`
  display: flex;
  align-items: center;
`
const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  margin-left: 20px;
  height: 35px;
  border-radius: 50%;
  background: #F6F8F9;
  cursor: pointer;
`;

Icon.Like = styled(like)`
  cursor: pointer;
`;
Icon.Resize = styled(resize)``;
export {
  Container,
  Img,
  InfoWrapper,
  Details,
  Icon,
  Footer,
  PriceSection,
  OldPrice,
  Characters,
  IconWrapper,
  Featured,
  ForSale,
  Owner
}