import styled from "styled-components";

const Container = styled.div`
    max-width:380px;
    position: relative;
    height: 286px;
    min-width: 343px;
    background: #F5F7FC;
    .description{
        background-color: #ffffff;
        text-align: center;
        padding: 40px 48px 61px;
        box-shadow: 0px 0px 20px rgba(13, 38, 59, 0.1);
        border-radius: 3px;
        width: 100%;
        height: 197px;
    }
    .small-description{
        font-size: 16px;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  transform: translate(0px, -37px);
`
const User = styled.img`
    width: 48px;
    height: 48px;
    border: 2px solid white;
    box-shadow: 0px 0px 10px rgba(13, 38, 59, 0.2);
    border-radius: 50%;
`;


export {Container,Wrapper,User}