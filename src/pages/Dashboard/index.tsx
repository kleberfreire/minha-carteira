import React from 'react'
import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'


import { 
  Container
} from './styled'

const Dashboard: React.FC = () => {
  const options = [
    {value: 1 , label: 1},
    {value: 2 , label: 2},
    {value: 3 , label: 3},
  ]  
  const letras = [
    {value: 'a' , label: 'a'},
    {value: 'b' , label: 'b'},
    {value: 'c' , label: 'c'},
  ]

  return (
    <Container>
      <ContentHeader title='Dashboard' lineColor='#F7931B'>
        <SelectInput options={options}/>
        <SelectInput options={letras}/>
      </ContentHeader >
    </Container>
  );
}

export default Dashboard;