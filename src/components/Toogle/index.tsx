import React from 'react';
import Switch from "react-switch";

import { Container,ToggleLabel, ToggleSelector } from './styles';


const Toogle: React.FC = () => {
  return (
    <Container>
      
        <ToggleLabel>Light</ToggleLabel>
        <ToggleSelector onChange={() => {}} checked={true} uncheckedIcon={false} checkedIcon={false} />
        <ToggleLabel>Dark</ToggleLabel>
    </Container>
  );
};

export default Toogle;
