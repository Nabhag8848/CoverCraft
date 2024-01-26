import { gql, useQuery } from "@apollo/client";

const GET_POSTS = gql`
  query Me {
    me {
      username
      name
      profilePicture
      posts(pageSize: 20, page: 1) {
        nodes {
          id
          slug
          title
        }
      }
    }
  }
`;

export function usePosts() {
  const { loading, error, data } = useQuery(GET_POSTS);

  return { isPostsLoading: loading, isPostsError: error, data };
}

export function getListOfPosts(data: any) {
  const posts = data.me.posts.nodes.map((post: any) => {
    return { value: post.id, text: post.title };
  });

  return posts;
}