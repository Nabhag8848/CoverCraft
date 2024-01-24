import { gql, useQuery } from "@apollo/client";

export interface IUserInfo {
  username: string;
  name: string;
  profilePicture?: string;
}

export const GET_USER_INFO = gql`
  query Me {
    me {
      username
      name
      profilePicture
    }
  }
`;

export function useUser() {
  const { loading, error, data } = useQuery(GET_USER_INFO);

  return { isUserLoading: loading, isUserError: error, user: data };
}
