import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username:$username, email:$email, password:$password) {
          token
          user {
            _id
            username
            email
          }
        }
    }
`;

export const LOGIN = gql`
    mutation login($email:String!, $password:String!) {
        login(email:$email, password:$password) {
          token
          user {
            _id
            email
          }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($userId: ID!, $input: BookInput!) {
      saveBook(id: $userId, input: $input) {
        savedBooks {
          title
          description
        }
      }
    }
`;