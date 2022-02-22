import { gql } from '@apollo/client'

export const GET_PEOPLE = gql`
  {
    people {
      id
      firstName
      lastName
    }
  }
`

export const GET_CARS = gql`
  {
    cars {
      id
      make
      model
      year
      price
    }
  }
`

export const ADD_PERSON = gql`
  mutation AddPerson($id: String!, $lastName: String!, $firstName: String!) {
    addPerson(id: $id, firstName: $firstName, lastName: $lastName) {
      id
      firstName
      lastName
    }
  }
`
