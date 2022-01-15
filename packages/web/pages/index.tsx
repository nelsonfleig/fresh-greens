import type { GetStaticProps, NextPage } from 'next';
import { Layout } from '../components';
import { useUser } from '../hooks/useUser';

const Home: NextPage = () => {
  const { user } = useUser();

  return <Layout>{JSON.stringify(user)}</Layout>;
};

export default Home;
