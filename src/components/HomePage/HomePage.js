import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import { Container } from './HomePage.styled';

const HomePage = () => {
  return (
    <Container>
      <AppBar />
      <Outlet />
    </Container>
  );
};

export default HomePage;
