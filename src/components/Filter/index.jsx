import React from 'react'
import { Container, Form,Icon,Advanced } from './style'
import { Button, Input } from '../Generic'
import { Popover } from 'antd'



const Filter = () => {
  const AdvancedSearch = <Advanced>
    <Advanced.Title>Address</Advanced.Title>
    <Advanced.Input>
      <Input mr={20} width="200px" placeholder={'Country'}/>
      <Input mr={20} width="200px" placeholder={'Region'}/>
      <Input mr={20} width="200px" placeholder={'City'}/>
      <Input width="200px" placeholder={'Zip code'}/>
    </Advanced.Input>
    <Advanced.Title>apartment info</Advanced.Title>
    <Advanced.Input>
      <Input mr={20} width="200px" placeholder={'Rooms'}/>
      <Input mr={20} width="200px" placeholder={'Size'}/>
      <Input mr={20} width="200px" placeholder={'Sort'}/>
    </Advanced.Input>
    <Advanced.Title>price</Advanced.Title>
    <Advanced.Input>
      <Input mr={20} width="200px" placeholder={'Min price'}/>
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