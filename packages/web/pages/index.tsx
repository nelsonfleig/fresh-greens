import type { NextPage } from 'next';
import { useUser } from '../hooks/useUser';

const Home: NextPage = () => {
  const { user } = useUser();

  return <h1>{JSON.stringify(user)}</h1>;
};

export default Home;
