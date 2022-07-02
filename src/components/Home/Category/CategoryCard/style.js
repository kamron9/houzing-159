import styled from "styled-components";


const Wrapper =styled.div`
position: relative;
    max-width: 280px;
    min-width: 250px;
    height: 350px;
    cursor: pointer;
    user-select: none;
`
const Img = styled.img`
    width: 100%;
    height: 100%;
`
const Icon = styled.div`
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    width: 60px;
    height: 60px;
`

const Title = styled.span`
    font-family: 'Montserrat';
    position: absolute;
    text-transform: capitalize;
    top: 50%;
    right: 50%;
    transform: translate(50%, 150%);
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    color: #FFFFFF;
`
export {Wrapper,Img,Icon,Title}