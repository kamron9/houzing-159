import styled from "styled-components";
import { ReactComponent as LeftArrow } from '../../../assets/icons/leftArrow.svg'
import { ReactComponent as RightArrow } from '../../../assets/icons/rightArrow.svg'
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  .description{
    text-align: center;
  }
`;
const Wrapper = styled.div`
		display: flex;
		justify-content: center;
		width:100%;
		position: relative;
		height: 600px;
		max-width: 1400px;
 .alice-carousel{
        max-width: 1280px;
    }
		.alice-carousel__stage{	
			padding: 20px;
		}
`
const Carousel = styled.div`
		width: 100%;
		padding: 0 50px;
`;



const Icon = styled.div``;

Icon.Left = styled(LeftArrow)`
  border: 1px solid #0d263b;
  box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 40%;
	left: 0px;
	transform: translate(0%, -50%);
	width: 45px;
	height: 45px;
	padding: 12px;
	background: white;
	opacity: 0.3;
	border-radius: 50%;
	z-index: 999;
	cursor: pointer;
	:hover {
		opacity: 0.5;
	}
	& path {
		fill: #0d263b;
	}
`;
Icon.Right = styled(RightArrow)`
  border: 1px solid #0d263b;
  box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 39%;
	right: 0px;
	transform: translate(-0%, -40%);
	width: 45px;
	height: 45px;
	background: white;
	padding: 12px;
	opacity: 0.3;
	border-radius: 50%;
	z-index: 999;
	cursor: pointer;
	:hover {
		opacity: 0.5;
	}
	& path {
		fill: #0d263b;
	}
`;
export { Container, Wrapper, Carousel, Icon }