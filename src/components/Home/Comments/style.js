import styled from "styled-components";
import { ReactComponent as LeftArrow } from '../../../assets/icons/leftArrow.svg'
import { ReactComponent as RightArrow } from '../../../assets/icons/rightArrow.svg'
const Container = styled.div`
    background: #F5F7FC;
    padding: 48px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const Wrapper = styled.div`
		display: flex;
		justify-content: center;
		width:100%;
        max-width: 1180px;
		position: relative;
		height: fit-content;
		max-width: 1400px;
 .alice-carousel{
        max-width: 1280px;
    }
		.alice-carousel__stage{	
			padding: 20px;
		}
        @media screen and (min-width:992px){
            .alice-carousel__dots{
                display: none;
            }
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
	top: 50%;
	left: 0px;
	transform: translate(-150%, -50%);
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
 
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 49%;
	right: 0px;
	transform: translate(150%, -40%);
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

export {Container,Wrapper, Icon, Carousel}