import React from 'react'
import { Container, Wrapper, Icon, FooterBottom } from './style'
import {Button} from '../Generic'

const Footer = () => {
  return (
    <Container>
        <Wrapper>
            {/* contact section */}
            <div className="contact_section column">
                <h1 className='sub-title'>contact us</h1>
                <div className="contact-item">
                    <Icon.Location/>
                    <p className='description'>
                    329 Queensberry Street, North Melbourne VIC 3051, Australia.
                    </p>
                </div>
                <div className="contact-item">
                    <Icon.Call/>
                    <p className='description'>
                        123 456 7890
                    </p>
                </div>
                <div className="contact-item">
                    <Icon.Email/>
                    <p className='description'>
                    support@houzing.com
                    </p>
                </div>
                <Icon.Wrapper>
                    <a href='https://facebook.com'><Icon.Facebook/></a>
                    <a href='https://twitter.com'><Icon.Twitter/></a>
                    <a href='https://instagram.com'><Icon.Instagram/></a>
                    <a href='https://linkedin.com'><Icon.Linkedin/></a>
                </Icon.Wrapper>
            </div>
            {/* discover section */}
            <div className="discover_section column">
                <h1 className='sub-title'>discover</h1>
                <p className='description'>chicago</p>
                <p className='description'>los angeles</p>
                <p className='description'>miami</p>
                <p className='description'>new york</p>
            </div>
            {/* list category section */}
            <div className="list_section column">
             <h1 className='sub-title'>lists by category</h1>
                <p className='description'>apartments</p>
                <p className='description'>condos</p>
                <p className='description'>houses</p>
                <p className='description'>offices</p>
                <p className='description'>retails</p>
                <p className='description'>villas</p>
            </div>
            {/* privacy section */}
            <div className="privacy_section column">
            <h1 className='sub-title'>privacy policy</h1>
                <p className='description'>about us</p>
                <p className='description'>terms & conditions</p>
                <p className='description'>support center</p>
                <p className='description'>contact us</p>
            </div>
        </Wrapper>
        <FooterBottom>
            <Wrapper>
                <Icon.Wrapper>
                    <Icon.FooterLogo/>
                    <h1 className='sub-title mb-0'>houzing</h1>
                </Icon.Wrapper>
                <Icon.Wrapper>
                    <p className='small-description mb-0'>Copyright © 2021 CreativeLayers. All Right Reserved.</p>
                    <Button ml={73} width={'45px'} height={'45px'} type={'primary'}><Icon.Arrow/></Button>
                </Icon.Wrapper>
            </Wrapper>
        </FooterBottom>
    </Container>
  )
}

export default Footer