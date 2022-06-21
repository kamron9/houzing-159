import React,{useState} from 'react'
import Card from '../Card'
import Filter from '../Filter'
import { Container, Result, Wrapper } from './style'
import { useQuery } from 'react-query'
import { useLocation } from 'react-router-dom'


const {REACT_APP_BASE_URL:url} = process.env

const Properties = () => {
    const {search} = useLocation()
    const [data, setData] = useState([])

        useQuery(["get started", search], ()=>{
            return fetch(`${url}v1/houses/list${search}`).then(res=>res.json())
        },{
            onSuccess: (res)=>{
                setData(res?.data || [])
            }
        })      
        console.log(data);  
  return (
    <Container>
        <Filter/>
        <h1 className='title'>Properties</h1>
        <p className='description text-center'>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
        <Result>{data?.length} result</Result>
        <Wrapper>
            {
                data.map((value)=>{
                    return(
                         <Card key={value.id} info={value}/>
                    )
                })
            }
        </Wrapper>
    </Container>
  )
}

export default Properties

//useRaplace