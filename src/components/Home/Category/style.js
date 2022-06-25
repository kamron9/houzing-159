import styled from "styled-components";
import { ReactComponent as LeftArrow } from '../../../assets/icons/leftArrow.svg'
import { ReactComponent as RightArrow } from '../../../assets/icons/rightArrow.svg'

const Container = styled.div`
    width: 100%;
    height: 692px;
    h1{
        margin-top: 96px;
    }
`
const Wrapper = styled.div`
    margin-top: 32px;
    display: flex;
    padding: 0 130px;
    position: relative;
    justify-content: center;
    .alice-carousel{
        max-width: 1280px;
    }
		.alice-carousel__stage{	
			padding: 20px;
		}
`


const Icon = styled.div``;

Icon.Left = styled(LeftArrow)`
  border: 1px solid #0d263b;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 45%;
	left: 150px;
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
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 45%;
	right: 150px;
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
	const Title = styled.div``
export{Container,Wrapper,Icon,Title}