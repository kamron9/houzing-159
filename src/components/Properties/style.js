import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    .title{
        margin-top: 64px;
    }
`
const Result = styled.div`
    margin: 70px 0 16px 0;
    padding: 0 130px;
    width: 100%;
    max-width: 1400px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #0D263B;
`
const Wrapper = styled.div`
    max-width: 1400px;
    /* padding:  0 130px; */
    width: 100%;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`
export {Container,Result,Wrapper}