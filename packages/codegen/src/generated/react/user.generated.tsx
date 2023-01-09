import type * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UsersQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, username: string, createdAt: any, updatedAt: any }> };

export type UserCountQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type UserCountQuery = { __typename?: 'Query', userCount: number };


export const UsersDocument = gql`
    query users {
  users {
    id
    username
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;
export const UserCountDocument = gql`
    query userCount {
  userCount
}
    `;

/**
 * __useUserCountQuery__
 *
 * To run a query within a React component, call `useUserCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserCountQuery(baseOptions?: Apollo.QueryHookOptions<UserCountQuery, UserCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserCountQuery, UserCountQueryVariables>(UserCountDocument, options);
      }
export function useUserCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserCountQuery, UserCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserCountQuery, UserCountQueryVariables>(UserCountDocument, options);
        }
export type UserCountQueryHookResult = ReturnType<typeof useUserCountQuery>;
export type UserCountLazyQueryHookResult = ReturnType<typeof useUserCountLazyQuery>;
export type UserCountQueryResult = Apollo.QueryResult<UserCountQuery, UserCountQueryVariables>;