import type { NextPage } from 'next';
import { Container, FeaturedList, Hero } from '../components';
import { useUser } from '../hooks/useUser';

const Home: NextPage = () => {
  const { user } = useUser();

  return (
    <Container>
      <Hero />
      <FeaturedList />
    </Container>
  );
};

export default Home;
