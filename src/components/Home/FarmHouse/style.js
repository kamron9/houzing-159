import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    position: relative;
    height: fit-content;
    .title{
       
        letter-spacing: -0.02em;
        color: #FFFFFF;
    }
`;
const Img= styled.img`
    width: 100%;
    max-height: 571px;
    filter: brightness(50%);
    /* margin-bottom: 200px; */
`;
const Wrapper = styled.div`
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 570px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
`

export{Container,Img,Wrapper}