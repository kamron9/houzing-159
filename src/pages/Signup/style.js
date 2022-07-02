import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    /* height: 90vh; */
`

const Wrapper = styled.div`
    display: flex;
    margin: 64px 0;
    flex-direction: column;
    width: 580px;
    height: fit-content;
    background: #FFFFFF;
    border: 1px solid #E6E9EC;
    box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
    border-radius: 3px;
    padding: 30px;
    gap: 20px;

`
export {Container, Wrapper}