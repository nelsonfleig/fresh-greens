import { getDataFromTree } from '@apollo/client/react/ssr';
import type { NextPage } from 'next';
import { Layout } from '../components';
import { useUser } from '../hooks/useUser';
import withApollo from '../lib/withApollo';

const Home: NextPage = () => {
  const { user } = useUser();

  return <Layout>{JSON.stringify(user)}</Layout>;
};

export default withApollo(Home, { getDataFromTree });
