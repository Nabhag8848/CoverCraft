import { gql, useQuery } from "@apollo/client";

const GET_DRAFTS = gql`
  query User($username: String!) {
    user(username: $username) {
      publications(first: 50) {
        edges {
          node {
            drafts(first: 10) {
              edges {
                node {
                  id
                  slug
                  title
                }
              }
            }
          }
        }
      }
    }
  }
`;

export function useDrafts({ username }: { username: string }) {
  const { loading, error, data } = useQuery(GET_DRAFTS, {
    variables: { username },
  });

  return { isDraftLoading: loading, isDraftError: error, data };
}

export function getListOfDrafts(data: any) {
  const drafts = data.data.user.publications.edges[0].node.drafts.edges.map(
    (draft: any) => {
      const value = draft.node;
      return { id: value.id, title: value.title, slug: value.slug };
    }
  );

  return drafts;
}
