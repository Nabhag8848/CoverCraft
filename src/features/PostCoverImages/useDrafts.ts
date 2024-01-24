import { gql, useQuery } from "@apollo/client";

const GET_DRAFTS = gql`
  query Me {
    me {
      username
      name
      profilePicture
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

export function useDrafts() {
  const { loading, error, data } = useQuery(GET_DRAFTS);

  return { isDraftLoading: loading, isDraftError: error, data };
}

export function getListOfDrafts(data: any) {
  const drafts = data.me.publications.edges[0].node.drafts.edges.map(
    (draft: any) => {
      const value = draft.node;
      return { value: value.id, text: value.title };
    }
  );

  return drafts;
}
