// THIS IS A GENERATED FILE, use `yarn codegen` to regenerate
/* tslint:disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  accessToken: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create Product */
  createProduct: Product;
  /** Create User */
  createUser: User;
  /** Login user */
  login: AuthResponse;
  /** Logout user */
  logout: Scalars['Boolean'];
  /** Register user */
  register: User;
  singleUploadS3: Scalars['String'];
  /** Update Product */
  updateProduct: Product;
  /** Update User */
  updateUser: User;
  upgradeToSeller: User;
};


export type MutationCreateProductArgs = {
  input: ProductInput;
  productImage: Scalars['Upload'];
};


export type MutationCreateUserArgs = {
  input: UserInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationRegisterArgs = {
  input: RegisterInput;
};


export type MutationSingleUploadS3Args = {
  file: Scalars['Upload'];
};


export type MutationUpdateProductArgs = {
  id: Scalars['ID'];
  input: ProductInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  input: UserInput;
};


export type MutationUpgradeToSellerArgs = {
  input: UpgradeToSellerInput;
  sellerImage: Scalars['Upload'];
};

export type Product = {
  __typename?: 'Product';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  imageUrl: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
  slug: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type ProductInput = {
  description: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  /** Find one Product */
  findOneProduct: Product;
  /** Find one User */
  findOneUser: User;
  /** List all Products */
  findProducts: Array<Product>;
  findProductsBySellerId: Array<Product>;
  /** List all Users */
  findUsers: Array<User>;
  hello: Scalars['String'];
  /** Get logged in user */
  me?: Maybe<User>;
  /** Paginate Products */
  paginateProducts: Array<Product>;
  /** Paginate Users */
  paginateUsers: Array<User>;
  protect: Scalars['Boolean'];
  testEmail: Scalars['Boolean'];
};


export type QueryFindOneProductArgs = {
  id: Scalars['ID'];
};


export type QueryFindOneUserArgs = {
  id: Scalars['ID'];
};


export type QueryFindProductsBySellerIdArgs = {
  sellerId: Scalars['ID'];
};


export type QueryPaginateProductsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type QueryPaginateUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type RegisterInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
};

/** User role */
export enum Role {
  Admin = 'ADMIN',
  Seller = 'SELLER',
  User = 'USER'
}

export type UpgradeToSellerInput = {
  address: Scalars['String'];
  city: Scalars['String'];
  sellerName: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  isSeller: Scalars['Boolean'];
  lastName: Scalars['String'];
  products?: Maybe<Array<Product>>;
  roles: Array<Role>;
  sellerImageUrl?: Maybe<Scalars['String']>;
  sellerName?: Maybe<Scalars['String']>;
  sellerNameSlug?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type UserInput = {
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  sellerImageUrl?: InputMaybe<Scalars['String']>;
  sellerName?: InputMaybe<Scalars['String']>;
};

export type ProductFragmentFragment = { __typename?: 'Product', id: string, name: string, description: string, price: number, imageUrl: string, user: { __typename?: 'User', id: string, sellerName?: string | null | undefined, sellerNameSlug?: string | null | undefined, sellerImageUrl?: string | null | undefined } };

export type AddProductMutationVariables = Exact<{
  input: ProductInput;
  productImage: Scalars['Upload'];
}>;


export type AddProductMutation = { __typename?: 'Mutation', createProduct: { __typename?: 'Product', id: string, name: string, slug: string, imageUrl: string, user: { __typename?: 'User', id: string } } };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthResponse', accessToken: string } };

export type RegisterMutationVariables = Exact<{
  input: RegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'User', id: string, email: string, roles: Array<Role> } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type UpgradeToSellerMutationVariables = Exact<{
  input: UpgradeToSellerInput;
  sellerImage: Scalars['Upload'];
}>;


export type UpgradeToSellerMutation = { __typename?: 'Mutation', upgradeToSeller: { __typename?: 'User', id: string, email: string, roles: Array<Role>, sellerName?: string | null | undefined, sellerImageUrl?: string | null | undefined } };

export type FindProductsBySellerIdQueryVariables = Exact<{
  sellerId: Scalars['ID'];
}>;


export type FindProductsBySellerIdQuery = { __typename?: 'Query', findProductsBySellerId: Array<{ __typename?: 'Product', id: string, name: string, description: string, price: number, imageUrl: string, user: { __typename?: 'User', id: string, sellerName?: string | null | undefined, sellerNameSlug?: string | null | undefined, sellerImageUrl?: string | null | undefined } }> };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, email: string, roles: Array<Role>, isSeller: boolean, firstName: string, lastName: string } | null | undefined };

export type FindUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type FindUsersQuery = { __typename?: 'Query', findUsers: Array<{ __typename?: 'User', id: string, email: string }> };

export const ProductFragmentFragmentDoc = gql`
    fragment productFragment on Product {
  id
  name
  description
  price
  imageUrl
  user {
    id
    sellerName
    sellerNameSlug
    sellerImageUrl
  }
}
    `;
export const AddProductDocument = gql`
    mutation AddProduct($input: ProductInput!, $productImage: Upload!) {
  createProduct(input: $input, productImage: $productImage) {
    id
    name
    slug
    imageUrl
    user {
      id
    }
  }
}
    `;
export type AddProductMutationFn = Apollo.MutationFunction<AddProductMutation, AddProductMutationVariables>;

/**
 * __useAddProductMutation__
 *
 * To run a mutation, you first call `useAddProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addProductMutation, { data, loading, error }] = useAddProductMutation({
 *   variables: {
 *      input: // value for 'input'
 *      productImage: // value for 'productImage'
 *   },
 * });
 */
export function useAddProductMutation(baseOptions?: Apollo.MutationHookOptions<AddProductMutation, AddProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddProductMutation, AddProductMutationVariables>(AddProductDocument, options);
      }
export type AddProductMutationHookResult = ReturnType<typeof useAddProductMutation>;
export type AddProductMutationResult = Apollo.MutationResult<AddProductMutation>;
export type AddProductMutationOptions = Apollo.BaseMutationOptions<AddProductMutation, AddProductMutationVariables>;
export const LoginDocument = gql`
    mutation Login($input: LoginInput!) {
  login(input: $input) {
    accessToken
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($input: RegisterInput!) {
  register(input: $input) {
    id
    email
    roles
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const UpgradeToSellerDocument = gql`
    mutation UpgradeToSeller($input: UpgradeToSellerInput!, $sellerImage: Upload!) {
  upgradeToSeller(input: $input, sellerImage: $sellerImage) {
    id
    email
    roles
    sellerName
    sellerImageUrl
  }
}
    `;
export type UpgradeToSellerMutationFn = Apollo.MutationFunction<UpgradeToSellerMutation, UpgradeToSellerMutationVariables>;

/**
 * __useUpgradeToSellerMutation__
 *
 * To run a mutation, you first call `useUpgradeToSellerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpgradeToSellerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upgradeToSellerMutation, { data, loading, error }] = useUpgradeToSellerMutation({
 *   variables: {
 *      input: // value for 'input'
 *      sellerImage: // value for 'sellerImage'
 *   },
 * });
 */
export function useUpgradeToSellerMutation(baseOptions?: Apollo.MutationHookOptions<UpgradeToSellerMutation, UpgradeToSellerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpgradeToSellerMutation, UpgradeToSellerMutationVariables>(UpgradeToSellerDocument, options);
      }
export type UpgradeToSellerMutationHookResult = ReturnType<typeof useUpgradeToSellerMutation>;
export type UpgradeToSellerMutationResult = Apollo.MutationResult<UpgradeToSellerMutation>;
export type UpgradeToSellerMutationOptions = Apollo.BaseMutationOptions<UpgradeToSellerMutation, UpgradeToSellerMutationVariables>;
export const FindProductsBySellerIdDocument = gql`
    query FindProductsBySellerId($sellerId: ID!) {
  findProductsBySellerId(sellerId: $sellerId) {
    ...productFragment
  }
}
    ${ProductFragmentFragmentDoc}`;

/**
 * __useFindProductsBySellerIdQuery__
 *
 * To run a query within a React component, call `useFindProductsBySellerIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindProductsBySellerIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindProductsBySellerIdQuery({
 *   variables: {
 *      sellerId: // value for 'sellerId'
 *   },
 * });
 */
export function useFindProductsBySellerIdQuery(baseOptions: Apollo.QueryHookOptions<FindProductsBySellerIdQuery, FindProductsBySellerIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindProductsBySellerIdQuery, FindProductsBySellerIdQueryVariables>(FindProductsBySellerIdDocument, options);
      }
export function useFindProductsBySellerIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindProductsBySellerIdQuery, FindProductsBySellerIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindProductsBySellerIdQuery, FindProductsBySellerIdQueryVariables>(FindProductsBySellerIdDocument, options);
        }
export type FindProductsBySellerIdQueryHookResult = ReturnType<typeof useFindProductsBySellerIdQuery>;
export type FindProductsBySellerIdLazyQueryHookResult = ReturnType<typeof useFindProductsBySellerIdLazyQuery>;
export type FindProductsBySellerIdQueryResult = Apollo.QueryResult<FindProductsBySellerIdQuery, FindProductsBySellerIdQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    id
    email
    roles
    isSeller
    firstName
    lastName
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const FindUsersDocument = gql`
    query FindUsers {
  findUsers {
    id
    email
  }
}
    `;

/**
 * __useFindUsersQuery__
 *
 * To run a query within a React component, call `useFindUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindUsersQuery(baseOptions?: Apollo.QueryHookOptions<FindUsersQuery, FindUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindUsersQuery, FindUsersQueryVariables>(FindUsersDocument, options);
      }
export function useFindUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindUsersQuery, FindUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindUsersQuery, FindUsersQueryVariables>(FindUsersDocument, options);
        }
export type FindUsersQueryHookResult = ReturnType<typeof useFindUsersQuery>;
export type FindUsersLazyQueryHookResult = ReturnType<typeof useFindUsersLazyQuery>;
export type FindUsersQueryResult = Apollo.QueryResult<FindUsersQuery, FindUsersQueryVariables>;