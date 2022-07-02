import React, {useRef,useState} from 'react'
import { Container, Wrapper } from './style'
import {Input, Button} from '../../components/Generic'
import Footer from '../../components/Footer'
import { useQueries, useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'




const {REACT_APP_BASE_URL:url} = process.env
const SignUp = () => {
//   const navigate = useNavigate()
//   const [err, setErr]= useState([])
//   // useQueries([],()=>{},{})
//  const {mutate} =  useMutation(()=>{
//   return fetch(`${url}public/auth/login`,{method:'POST',
//   headers:{'Content-type':'application/json'},
//   body:JSON.stringify({email:emailRef.current.value, password:pwRef.current.value})})
//   .then(res=>res.json())
//  },{
//   onSuccess:(res)=>{
//     localStorage.setItem('token', res.authenticationToken)
//     if(res.authenticationToken) navigate('/home')

//   },
//   onError:(error)=>{
//     setErr(error)
//   }
//  })
//  console.log(err);

  //mutate
    const emailRef = useRef('')
    const pwRef = useRef('')

    // const onSubmit =()=>{
    //   mutate()
    // }

  return (
    <Container>
      <Wrapper>
        <h1 className='title'>Registration</h1>
        <Input placeholder={'First name'}/>
        <Input placeholder={'Last name'}/>
        <Input  ref={emailRef}  placeholder={'Email'}/>
        <Input  ref={pwRef} placeholder={'Password'}/>
        <Input placeholder={'Re-enter password'}/>
        <Button  width={'100%'} type={'primary'}>Register</Button>
        {/* <Button onClick={onSubmit} width={'100%'} type={'primary'}>Login</Button> */}
      </Wrapper>
      <Footer/>
    </Container>
  )
}

export default SignUp