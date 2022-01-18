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
  user: User;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create Product */
  createProduct: Product;
  /** Create Shop */
  createShop: Shop;
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
  /** Update Shop */
  updateShop: Shop;
  /** Update User */
  updateUser: User;
};


export type MutationCreateProductArgs = {
  input: ProductInput;
  productImage: Scalars['Upload'];
};


export type MutationCreateShopArgs = {
  input: ShopInput;
  shopImage: Scalars['Upload'];
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


export type MutationUpdateShopArgs = {
  id: Scalars['ID'];
  input: ShopInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  input: UserInput;
};

export type Product = {
  __typename?: 'Product';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  imageUrl: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
  shop: Shop;
  slug: Scalars['String'];
  unit: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ProductInput = {
  description: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
  shop: Scalars['String'];
  unit: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  /** Find logged in user's shops */
  findMyShops: Array<Shop>;
  /** Find one Product */
  findOneProduct: Product;
  /** Find one Shop */
  findOneShop: Shop;
  /** Find one User */
  findOneUser: User;
  /** List all Products */
  findProducts: Array<Product>;
  /** Find a shop by slug */
  findShopBySlug: Shop;
  /** List all Shops */
  findShops: Array<Shop>;
  /** List all Users */
  findUsers: Array<User>;
  hello: Scalars['String'];
  /** Get logged in user */
  me?: Maybe<User>;
  /** Paginate Products */
  paginateProducts: Array<Product>;
  /** Paginate Shops */
  paginateShops: Array<Shop>;
  /** Paginate Users */
  paginateUsers: Array<User>;
  protect: Scalars['Boolean'];
  testEmail: Scalars['Boolean'];
};


export type QueryFindOneProductArgs = {
  id: Scalars['ID'];
};


export type QueryFindOneShopArgs = {
  id: Scalars['ID'];
};


export type QueryFindOneUserArgs = {
  id: Scalars['ID'];
};


export type QueryFindShopBySlugArgs = {
  slug: Scalars['String'];
};


export type QueryPaginateProductsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type QueryPaginateShopsArgs = {
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

export type Shop = {
  __typename?: 'Shop';
  address: Scalars['String'];
  city: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  imageUrl: Scalars['String'];
  name: Scalars['String'];
  products?: Maybe<Array<Product>>;
  slug: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  zipCode: Scalars['String'];
};

export type ShopInput = {
  address: Scalars['String'];
  city: Scalars['String'];
  name: Scalars['String'];
  zipCode: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  isSeller: Scalars['Boolean'];
  lastName: Scalars['String'];
  roles: Array<Role>;
  shops?: Maybe<Array<Shop>>;
  updatedAt: Scalars['DateTime'];
};

export type UserInput = {
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type AuthUserFragmentFragment = { __typename?: 'User', id: string, isSeller: boolean, roles: Array<Role> };

export type ProductFragmentFragment = { __typename?: 'Product', id: string, name: string, price: number, slug: string, description: string, imageUrl: string, unit: string };

export type ShopFragmentFragment = { __typename?: 'Shop', id: string, name: string, slug: string, imageUrl: string, address: string, city: string, zipCode: string, products?: Array<{ __typename?: 'Product', id: string, name: string, price: number, slug: string, description: string, imageUrl: string, unit: string }> | null | undefined, user: { __typename?: 'User', id: string } };

export type CreateProductMutationVariables = Exact<{
  input: ProductInput;
  productImage: Scalars['Upload'];
}>;


export type CreateProductMutation = { __typename?: 'Mutation', createProduct: { __typename?: 'Product', id: string, name: string, slug: string, imageUrl: string, shop: { __typename?: 'Shop', id: string, slug: string } } };

export type CreateShopMutationVariables = Exact<{
  input: ShopInput;
  shopImage: Scalars['Upload'];
}>;


export type CreateShopMutation = { __typename?: 'Mutation', createShop: { __typename?: 'Shop', id: string, name: string, slug: string, imageUrl: string, address: string, city: string, zipCode: string, products?: Array<{ __typename?: 'Product', id: string, name: string, price: number, slug: string, description: string, imageUrl: string, unit: string }> | null | undefined, user: { __typename?: 'User', id: string } } };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthResponse', accessToken: string, user: { __typename?: 'User', id: string, isSeller: boolean, roles: Array<Role> } } };

export type RegisterMutationVariables = Exact<{
  input: RegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'User', id: string, email: string, roles: Array<Role> } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type FindOneShopQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type FindOneShopQuery = { __typename?: 'Query', shop: { __typename?: 'Shop', id: string, name: string, slug: string, imageUrl: string, address: string, city: string, zipCode: string, products?: Array<{ __typename?: 'Product', id: string, name: string, price: number, slug: string, description: string, imageUrl: string, unit: string }> | null | undefined, user: { __typename?: 'User', id: string } } };

export type FindShopBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type FindShopBySlugQuery = { __typename?: 'Query', shop: { __typename?: 'Shop', id: string, name: string, slug: string, imageUrl: string, address: string, city: string, zipCode: string, products?: Array<{ __typename?: 'Product', id: string, name: string, price: number, slug: string, description: string, imageUrl: string, unit: string }> | null | undefined, user: { __typename?: 'User', id: string } } };

export type FindMyShopsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindMyShopsQuery = { __typename?: 'Query', shops: Array<{ __typename?: 'Shop', id: string, name: string, slug: string, imageUrl: string, address: string, city: string, zipCode: string, products?: Array<{ __typename?: 'Product', id: string, name: string, price: number, slug: string, description: string, imageUrl: string, unit: string }> | null | undefined, user: { __typename?: 'User', id: string } }> };

export type FindShopsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindShopsQuery = { __typename?: 'Query', shops: Array<{ __typename?: 'Shop', id: string, name: string, slug: string, imageUrl: string, address: string, city: string, zipCode: string, products?: Array<{ __typename?: 'Product', id: string, name: string, price: number, slug: string, description: string, imageUrl: string, unit: string }> | null | undefined, user: { __typename?: 'User', id: string } }> };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, email: string, roles: Array<Role>, isSeller: boolean, firstName: string, lastName: string, shops?: Array<{ __typename?: 'Shop', id: string, name: string, slug: string, imageUrl: string, address: string, city: string, zipCode: string, products?: Array<{ __typename?: 'Product', id: string, name: string, price: number, slug: string, description: string, imageUrl: string, unit: string }> | null | undefined, user: { __typename?: 'User', id: string } }> | null | undefined } | null | undefined };

export const AuthUserFragmentFragmentDoc = gql`
    fragment authUserFragment on User {
  id
  isSeller
  roles
}
    `;
export const ProductFragmentFragmentDoc = gql`
    fragment productFragment on Product {
  id
  name
  price
  slug
  description
  imageUrl
  unit
}
    `;
export const ShopFragmentFragmentDoc = gql`
    fragment shopFragment on Shop {
  id
  name
  slug
  imageUrl
  address
  city
  zipCode
  products {
    ...productFragment
  }
  user {
    id
  }
}
    ${ProductFragmentFragmentDoc}`;
export const CreateProductDocument = gql`
    mutation CreateProduct($input: ProductInput!, $productImage: Upload!) {
  createProduct(input: $input, productImage: $productImage) {
    id
    name
    slug
    imageUrl
    shop {
      id
      slug
    }
  }
}
    `;
export type CreateProductMutationFn = Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      input: // value for 'input'
 *      productImage: // value for 'productImage'
 *   },
 * });
 */
export function useCreateProductMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, options);
      }
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<CreateProductMutation, CreateProductMutationVariables>;
export const CreateShopDocument = gql`
    mutation CreateShop($input: ShopInput!, $shopImage: Upload!) {
  createShop(input: $input, shopImage: $shopImage) {
    ...shopFragment
  }
}
    ${ShopFragmentFragmentDoc}`;
export type CreateShopMutationFn = Apollo.MutationFunction<CreateShopMutation, CreateShopMutationVariables>;

/**
 * __useCreateShopMutation__
 *
 * To run a mutation, you first call `useCreateShopMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateShopMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createShopMutation, { data, loading, error }] = useCreateShopMutation({
 *   variables: {
 *      input: // value for 'input'
 *      shopImage: // value for 'shopImage'
 *   },
 * });
 */
export function useCreateShopMutation(baseOptions?: Apollo.MutationHookOptions<CreateShopMutation, CreateShopMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateShopMutation, CreateShopMutationVariables>(CreateShopDocument, options);
      }
export type CreateShopMutationHookResult = ReturnType<typeof useCreateShopMutation>;
export type CreateShopMutationResult = Apollo.MutationResult<CreateShopMutation>;
export type CreateShopMutationOptions = Apollo.BaseMutationOptions<CreateShopMutation, CreateShopMutationVariables>;
export const LoginDocument = gql`
    mutation Login($input: LoginInput!) {
  login(input: $input) {
    accessToken
    user {
      ...authUserFragment
    }
  }
}
    ${AuthUserFragmentFragmentDoc}`;
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
export const FindOneShopDocument = gql`
    query FindOneShop($id: ID!) {
  shop: findOneShop(id: $id) {
    ...shopFragment
  }
}
    ${ShopFragmentFragmentDoc}`;

/**
 * __useFindOneShopQuery__
 *
 * To run a query within a React component, call `useFindOneShopQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOneShopQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOneShopQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindOneShopQuery(baseOptions: Apollo.QueryHookOptions<FindOneShopQuery, FindOneShopQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindOneShopQuery, FindOneShopQueryVariables>(FindOneShopDocument, options);
      }
export function useFindOneShopLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindOneShopQuery, FindOneShopQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindOneShopQuery, FindOneShopQueryVariables>(FindOneShopDocument, options);
        }
export type FindOneShopQueryHookResult = ReturnType<typeof useFindOneShopQuery>;
export type FindOneShopLazyQueryHookResult = ReturnType<typeof useFindOneShopLazyQuery>;
export type FindOneShopQueryResult = Apollo.QueryResult<FindOneShopQuery, FindOneShopQueryVariables>;
export const FindShopBySlugDocument = gql`
    query FindShopBySlug($slug: String!) {
  shop: findShopBySlug(slug: $slug) {
    ...shopFragment
  }
}
    ${ShopFragmentFragmentDoc}`;

/**
 * __useFindShopBySlugQuery__
 *
 * To run a query within a React component, call `useFindShopBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindShopBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindShopBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useFindShopBySlugQuery(baseOptions: Apollo.QueryHookOptions<FindShopBySlugQuery, FindShopBySlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindShopBySlugQuery, FindShopBySlugQueryVariables>(FindShopBySlugDocument, options);
      }
export function useFindShopBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindShopBySlugQuery, FindShopBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindShopBySlugQuery, FindShopBySlugQueryVariables>(FindShopBySlugDocument, options);
        }
export type FindShopBySlugQueryHookResult = ReturnType<typeof useFindShopBySlugQuery>;
export type FindShopBySlugLazyQueryHookResult = ReturnType<typeof useFindShopBySlugLazyQuery>;
export type FindShopBySlugQueryResult = Apollo.QueryResult<FindShopBySlugQuery, FindShopBySlugQueryVariables>;
export const FindMyShopsDocument = gql`
    query FindMyShops {
  shops: findMyShops {
    ...shopFragment
  }
}
    ${ShopFragmentFragmentDoc}`;

/**
 * __useFindMyShopsQuery__
 *
 * To run a query within a React component, call `useFindMyShopsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindMyShopsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindMyShopsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindMyShopsQuery(baseOptions?: Apollo.QueryHookOptions<FindMyShopsQuery, FindMyShopsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindMyShopsQuery, FindMyShopsQueryVariables>(FindMyShopsDocument, options);
      }
export function useFindMyShopsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindMyShopsQuery, FindMyShopsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindMyShopsQuery, FindMyShopsQueryVariables>(FindMyShopsDocument, options);
        }
export type FindMyShopsQueryHookResult = ReturnType<typeof useFindMyShopsQuery>;
export type FindMyShopsLazyQueryHookResult = ReturnType<typeof useFindMyShopsLazyQuery>;
export type FindMyShopsQueryResult = Apollo.QueryResult<FindMyShopsQuery, FindMyShopsQueryVariables>;
export const FindShopsDocument = gql`
    query FindShops {
  shops: findShops {
    ...shopFragment
  }
}
    ${ShopFragmentFragmentDoc}`;

/**
 * __useFindShopsQuery__
 *
 * To run a query within a React component, call `useFindShopsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindShopsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindShopsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindShopsQuery(baseOptions?: Apollo.QueryHookOptions<FindShopsQuery, FindShopsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindShopsQuery, FindShopsQueryVariables>(FindShopsDocument, options);
      }
export function useFindShopsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindShopsQuery, FindShopsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindShopsQuery, FindShopsQueryVariables>(FindShopsDocument, options);
        }
export type FindShopsQueryHookResult = ReturnType<typeof useFindShopsQuery>;
export type FindShopsLazyQueryHookResult = ReturnType<typeof useFindShopsLazyQuery>;
export type FindShopsQueryResult = Apollo.QueryResult<FindShopsQuery, FindShopsQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    id
    email
    roles
    isSeller
    firstName
    lastName
    shops {
      ...shopFragment
    }
  }
}
    ${ShopFragmentFragmentDoc}`;

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