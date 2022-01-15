import type { NextPage } from 'next';
import { Layout } from '../components';
import { useUser } from '../hooks/useUser';
import withApollo from '../lib/withApollo';
import { getDataFromTree } from '@apollo/client/react/ssr';

const Home: NextPage = () => {
  const { user } = useUser();

  return <h1>{JSON.stringify(user)}</h1>;
};

export default Home;
