import styled from "styled-components";
import {ReactComponent as location} from '../../assets/icons/pin.svg'
import {ReactComponent as call} from '../../assets/icons/call.svg'
import {ReactComponent as email} from '../../assets/icons/email.svg'
import {ReactComponent as fb} from '../../assets/icons/fb.svg'
import {ReactComponent as tw} from '../../assets/icons/tw.svg'
import {ReactComponent as insta} from '../../assets/icons/insta.svg'
import {ReactComponent as linkedin} from '../../assets/icons/linkedin.svg'
import {ReactComponent as navLogo} from '../../assets/icons/navLogo.svg'
import {ReactComponent as arrow} from '../../assets/icons/rightArrow.svg'

const Container = styled.footer`
    display: flex;
    flex-direction: column;
    padding: 48px 0 0 0;
    align-items: center;
    width: 100%;
    color: #ffffff;
    background-color: var(--primaryColor);
    .column{
        max-width: 300px;
    }
    .sub-title{
        color: #ffffff;
        text-transform:capitalize;
        font-size: 22px;
        margin-bottom: 32px;
    }
    .description{
        color: #ffffff;
        text-transform: capitalize;

    }
    .contact-item{
        display: flex;
        /* align-items: center; */
    }
`;
const Wrapper = styled.div`
    max-width: 1180px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

//icons
const Icon = styled.div``
Icon.Wrapper = styled.div`
    display: flex;
    align-items: center;
    .mb-0{
        margin-bottom: 0;
    }
    a{
       height: 46px;
       display: flex;
       align-items: center;
       justify-content: center;
       width: 46px;
    }
    a:hover{
        background: #253c4f;
        border-radius: 3px;
    }
`;
Icon.Location = styled(location)`
   flex: 0 0 18px;
   margin-right: 22px;
`;
Icon.Call = styled(call)`
   margin-right: 22px;
`;
Icon.Email = styled(email)`
   margin-right: 22px;
`;
Icon.Facebook = styled(fb)`
    width: 20px;
    height: 20px;
`;
Icon.Twitter = styled(tw)`
        width: 20px;
        height: 20px;
`;
Icon.Instagram = styled(insta)`
        width: 20px;
        height: 20px;
`;
Icon.Linkedin = styled(linkedin)`
        width: 20px;
        height: 20px;
`;
Icon.FooterLogo = styled(navLogo)`
    margin-right: 12px;
`;
Icon.Arrow = styled(arrow)`
    transform: rotate(270deg);
`
const FooterBottom = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 68px;
    border-top: 1px solid  rgba(255, 255, 255, 0.15);
    .small-description {
        color: white;
    }
`;

export {Container,Wrapper, Icon,FooterBottom}