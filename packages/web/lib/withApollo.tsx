import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import withApollo from 'next-with-apollo';
import { useRouter } from 'next/router';

const httpLink = createUploadLink({
  uri: process.env.GRAPHQL_URL || 'http://localhost:5001/graphql',
  credentials: 'include',
}) as unknown as ApolloLink;

export default withApollo(
  ({ initialState, headers }) => {
    return new ApolloClient({
      ssrMode: typeof window === 'undefined',
      link: ApolloLink.from([httpLink]),
      headers: {
        ...(headers as Record<string, string>),
      },
      cache: new InMemoryCache().restore(initialState || {}),
    });
  },
  {
    render: ({ Page, props }) => {
      const router = useRouter();

      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} {...router} />
        </ApolloProvider>
      );
    },
  }
);
