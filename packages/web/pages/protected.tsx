import { GetStaticProps, NextPage } from 'next';
import { Layout } from '../components';
import { Role } from '../graphql/__generated__';
import { useUser } from '../hooks/useUser';
import withApollo from '../lib/withApollo';
import { PageProps } from '../types';

const Protected: NextPage = () => {
  const { user } = useUser();

  return (
    <div>
      <h1>PROTECTED PAGE</h1>
      <p>{JSON.stringify(user)}</p>
    </div>
  );
};

export const getStaticProps: GetStaticProps<PageProps, {}> = async context => {
  return {
    props: {
      protected: true,
      roles: [Role.User],
    },
  };
};

export default Protected;
