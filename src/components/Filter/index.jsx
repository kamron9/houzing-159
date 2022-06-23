import React, {useState} from 'react'
import { Container, Form,Icon,Advanced } from './style'
import { Button, Input } from '../Generic'
import { Popover } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
import useSearch from '../hooks/useSearch'
import UseReplace  from '../hooks/useReplace'

const Filter = () => {
  const [visible, setVisible] = useState(false);
  const query = useSearch()
  const navigate = useNavigate()
  const {pathname} = useLocation()
  const change =({target})=>{
    const {value, name} = target
    navigate(`${UseReplace(value,name)}`)
  }
  //=========================


  const hide = () => {
    setVisible(false);
  };

  const handleVisibleChange = (newVisible) => {
    console.log(newVisible);
    setVisible(newVisible);
  };

  const AdvancedSearch = <Advanced>
    <Advanced.Title>Address</Advanced.Title>
    <Advanced.Input>
      <Input onChange={change} name="country" defaultValue={query.get('country')} width="200px" placeholder={'Country'}/>
      <Input onChange={change} name="region" defaultValue={query.get('region')} width="200px" placeholder={'Region'}/>
      <Input onChange={change} name="city" defaultValue={query.get('city')} width="200px" placeholder={'City'}/>
      <Input onChange={change} name="zip_code" defaultValue={query.get('zip_code')} width="200px"  placeholder={'Zip code'}/>
    </Advanced.Input>
    <Advanced.Title>apartment info</Advanced.Title>
    <Advanced.Input>
      <Input onChange={change} name="address" defaultValue={query.get('address')} width="200px" placeholder={'Address'}/>
      <Input onChange={change} name="house_name" defaultValue={query.get('house_name')}  width="200px" placeholder={'House Name'}/>
      <Input onChange={change} name="room" defaultValue={query.get('room')} width="200px" placeholder={'Rooms'}/>
    </Advanced.Input>
    <Advanced.Title>price</Advanced.Title>
    <Advanced.Input>
      <Input onChange={change} name="min_price" defaultValue={query.get('min_price')} width="200px" placeholder={'Min price'}/>
      <Input onChange={change} name="max_price" defaultValue={query.get('max_price')} width="200px" placeholder={'Max price'}/>
    </Advanced.Input>
    <Advanced.Btn>
      <Button onClick={hide} type={'secondary'} width={'130px'}>Cancel</Button>
      <Button type={'primary'} width={'130px'}>Submit</Button>
    </Advanced.Btn>

  </Advanced>
  return (
    <Container>
      <Form>
          <Input pl={'42px'}  placeholder="Enter an address, neighborhood, city, or ZIP code">
            <Icon.Home/>
          </Input>
          <Popover  visible={visible} onVisibleChange={handleVisibleChange} placement='bottomRight' content={AdvancedSearch} trigger={'click'}>
            <Button ml={20} mr={20} type={'secondary'} width="150px"> <Icon.Settings/>Advanced</Button>
          </Popover>
          <Button type={'primary'} width={'190px'}><Icon.Search/>Search</Button>
      </Form>
    </Container>
  )
}

export default Filter


