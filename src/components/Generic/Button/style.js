import styled from 'styled-components';

const getType = (type) => {
	switch (type) {
		case 'primary':
			return { background: '#0061df', color: '#ffffff', border: 'none' };
		case 'secondary':
			return { border: '1px solid #e6e9ec', background: '#ffffff', color: '#0D263B' };
		default:
			return {
				border: '1px solid #E6E9EC',
				color: '#ffffff',
				background: 'transparent',
			};
	}
};

const Container = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	border-radius: 3px;
	line-height: 20px;
	width: ${({ width }) => (width ? width : 'auto')};
	height: ${({ height }) => height || '44px'};
	margin-top: ${({ mt }) => `${mt}px`};
	margin-bottom: ${({ mb }) => `${mb}px`};
	margin-right: ${({ mr }) => `${mr}px`};
	margin-left: ${({ ml }) => `${ml}px`};
	${({ type }) => getType(type)}
	cursor: pointer;
	:active {
		transform: scale(0.98);
		opacity: 0.7;
	}
`;

export { Container };