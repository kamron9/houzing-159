import React, {useRef,useState} from 'react'
import { Container, Wrapper } from './style'
import {Input, Button} from '../../components/Generic'
import Footer from '../../components/Footer'
import { useQueries, useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'




const {REACT_APP_BASE_URL:url} = process.env
const SignIn = () => {
  const navigate = useNavigate()
  const [err, setErr]= useState([])
  // useQueries([],()=>{},{})
 const {mutate} =  useMutation(()=>{
  return fetch(`${url}public/auth/login`,{method:'POST',
  headers:{'Content-type':'application/json'},
  body:JSON.stringify({email:emailRef.current.value, password:pwRef.current.value})})
  .then(res=>res.json())
 },{
  onSuccess:(res)=>{
    localStorage.setItem('token', res.authenticationToken)
    if(res.authenticationToken) navigate('/home')

  },
  onError:(error)=>{
    setErr(error)
  }
 })
 console.log(err);

  //mutate
    const emailRef = useRef('')
    const pwRef = useRef('')

    const onSubmit =()=>{
      mutate()
    }

  return (
    <Container>
      <Wrapper>
        <h1 className='title'>Sign in</h1>
        <Input  ref={emailRef}  placeholder={'email'}/>
        <Input  ref={pwRef} placeholder={'password'}/>
        <Button onClick={onSubmit} width={'100%'} type={'primary'}>Login</Button>
      </Wrapper>
      <Footer/>
    </Container>
  )
}

export default SignIn