"use client";

import { FC, PropsWithChildren } from "react";

import { ApolloProvider } from "@apollo/client";

import { createApolloClient } from "@org/codegen";

import "$styles/global.scss";

const client = createApolloClient(
  process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string
);

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default RootLayout;
