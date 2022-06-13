import styled from "styled-components";
import { Carousel } from 'antd';
import { ReactComponent as LeftArrow } from '../../../assets/icons/leftArrow.svg'
import { ReactComponent as RightArrow } from '../../../assets/icons/rightArrow.svg'




const Container = styled(Carousel)`
`
const Wrapper = styled.div`
position: relative;
height: fit-content;
`
const Img = styled.img`
max-height: 571px;
filter: brightness(50%);
`

const Icon = styled.div``;

Icon.Left = styled(LeftArrow)`
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 50%;
	left: 0px;
	transform: translate(100%, -50%);
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
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 50%;
	right: 0;
	transform: translate(-100%, -40%);
	width: 45px;
	height: 45px;
	padding: 12px;
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
export { Container, Img, Icon, Wrapper }