import React from 'react';

import { Container, Search, User } from './styles';

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>

    <User>
      <img src="https://avatars1.githubusercontent.com/u/18120405?s=400&u=27f66f4a5a94362cdb02f751911eeeb96e31246a&v=4" alt="Avatar" />
      Anderson Saraiva
    </User>
  </Container>
);

export default Header;
