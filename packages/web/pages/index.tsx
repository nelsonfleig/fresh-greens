import type { NextPage } from 'next';
import { Container, ShopsList, Hero } from '../components';
import { useFindShopsQuery } from '../graphql/__generated__';
import { useUser } from '../hooks/useUser';

const Home: NextPage = () => {
  const { user } = useUser();
  const { data } = useFindShopsQuery();

  return (
    <Container>
      <Hero />
      <ShopsList title="Featured Sellers" shops={data?.shops} />
    </Container>
  );
};

export default Home;
