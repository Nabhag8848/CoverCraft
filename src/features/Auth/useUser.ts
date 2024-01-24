import { gql } from "@apollo/client";

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
