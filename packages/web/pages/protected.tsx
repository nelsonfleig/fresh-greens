import { GetStaticProps, NextPage } from 'next';
import { Layout } from '../components';
import { useUser } from '../hooks/useUser';
import withApollo from '../lib/withApollo';

const Protected: NextPage = () => {
  const { user } = useUser();

  return (
    <Layout>
      <h1>PROTECTED PAGE</h1>
      <p>{JSON.stringify(user)}</p>
    </Layout>
  );
};

interface StaticProps {
  protected?: boolean;
  userTypes?: string[];
}

export const getStaticProps: GetStaticProps<StaticProps, {}> = async context => {
  return {
    props: {
      protected: true,
      userTypes: ['USER'],
    },
  };
};

export default Protected;
