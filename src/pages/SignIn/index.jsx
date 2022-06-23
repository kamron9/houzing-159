import React, {useRef} from 'react'
import { Container, Wrapper } from './style'
import {Input, Button} from '../../components/Generic'
import Footer from '../../components/Footer'

const SignIn = () => {


    const emailRef = useRef('')
    const pwRef = useRef('')

    const onSubmit =()=>{
      console.log(emailRef.current.value);
      console.log(pwRef.current.value);
    }

  return (
    <Container>
      <Wrapper>
        <h1 className='title'>Sign in</h1>
        <Input ref={emailRef}  placeholder={'email'}/>
        <Input  ref={pwRef} placeholder={'password'}/>
        <Button onClick={onSubmit} width={'100%'} type={'primary'}>Login</Button>
      </Wrapper>
      <Footer/>
    </Container>
  )
}

export default SignIn