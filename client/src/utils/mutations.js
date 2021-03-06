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
    mutation saveBook($id: ID!, $input: BookInput!) {
      saveBook(id: $id, input: $input) {
        savedBooks {
          title
          description
        }
      }
    }
`;

export const DELETE_BOOK = gql`
  mutation deleteBook($id: ID!, $bookId: String!) {
    deleteBook(id: $id, bookId: $bookId) {
      bookCount
      savedBooks {
        bookId
        title
        description
        authors
        image
        link
      }
    }
  }
`;
