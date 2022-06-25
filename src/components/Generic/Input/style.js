import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 44px;
  position: relative;
  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
  margin-right: ${({ mr }) => `${mr}px`};
  margin-left: ${({ ml }) => `${ml}px`};
  width: ${({ width }) => (width ? width : '100%')};
	height: ${({ height }) => height || '44px'};
  border: 1px solid #e6e9ec;
 
`

const Icon = styled.div`
  	position: absolute;
	  transform: translate(-50%, -50%);
	  top: 50%;
	  left: 30px;
`
const SearchInput = styled.input`
	display: flex;
  width: 100%;
	padding-left: ${({ pl }) => pl || '14px'};
	border-radius: 2px;
	outline: none;
	border: none;
	height: 100%;
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
	color: #0d263b ;
	:focus{
		box-shadow: 0px 0px 5px 0.2px var(--activeColor);
	}

`

export { Container, SearchInput, Icon }