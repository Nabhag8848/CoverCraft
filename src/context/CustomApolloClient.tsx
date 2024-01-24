import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { h } from "preact";
import { PropsWithChildren, useCallback, useMemo } from "preact/compat";
import { useAuth } from "../features/Auth/AuthContext";

const httpLink = createHttpLink({
  uri: "https://gql.hashnode.com/",
});

const PreactApolloProvider = ApolloProvider as preact.FunctionComponent<any>;

function CustomApolloClient({ children }: PropsWithChildren) {
  const { token } = useAuth();
  const authLink = useCallback(
    () =>
      setContext((_, { headers }) => {
        return {
          headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
          },
        };
      }),
    [token]
  );
  const client = useMemo(() => {
    return new ApolloClient({
      cache: new InMemoryCache(),
      link: authLink().concat(httpLink),
    });
  }, [token]);

  return (
    <PreactApolloProvider client={client}>{children}</PreactApolloProvider>
  );
}

export default CustomApolloClient;
