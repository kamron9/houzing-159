import React from 'react'
import { Container, Form,Icon,Advanced } from './style'
import { Button, Input } from '../Generic'
import { Popover } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
import useSearch from '../hooks/useSearch'
import UseReplace  from '../hooks/useReplace'

const Filter = () => {
  const query = useSearch()
  const navigate = useNavigate()
  const {pathname} = useLocation()
  const change =({target})=>{
    const {value, name} = target
    navigate(`${UseReplace(value,name)}`)
  }

  const AdvancedSearch = <Advanced>
    <Advanced.Title>Address</Advanced.Title>
    <Advanced.Input>
      <Input onChange={change} name="country" defaultValue={query.get('country')} width="200px" placeholder={'Country'}/>
      <Input width="200px" placeholder={'Region'}/>
      <Input onChange={change} name="city" defaultValue={query.get('city')} width="200px" placeholder={'City'}/>
      <Input width="200px"  placeholder={'Zip code'}/>
    </Advanced.Input>
    <Advanced.Title>apartment info</Advanced.Title>
    <Advanced.Input>
      <Input  width="200px" placeholder={'Rooms'}/>
      <Input  width="200px" placeholder={'Size'}/>
      <Input  width="200px" placeholder={'Sort'}/>
    </Advanced.Input>
    <Advanced.Title>price</Advanced.Title>
    <Advanced.Input>
      <Input  width="200px" placeholder={'Min price'}/>
      <Input width="200px" placeholder={'Max price'}/>
    </Advanced.Input>
    <Advanced.Btn>
      <Button type={'primary'} width={'130px'}>Submit</Button>
    </Advanced.Btn>

  </Advanced>
  return (
    <Container>
      <Form>
          <Input pl={'42px'} placeholder="Enter an address, neighborhood, city, or ZIP code">
            <Icon.Home/>
          </Input>
          <Popover placement='bottomRight' content={AdvancedSearch} trigger={'click'}>
            <Button ml={20} mr={20} type={'secondary'} width="150px"> <Icon.Settings/>Advanced</Button>
          </Popover>
          <Button type={'primary'} width={'190px'}><Icon.Search/>Search</Button>
      </Form>
    </Container>
  )
}

export default Filter


