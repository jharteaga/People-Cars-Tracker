import { gql } from 'apollo-server'
import { getPeople } from './controllers/person'

const typeDefs = gql`
  type Person {
    id: String!
    firstName: String!
    lastName: String!
  }

  type Car {
    id: String!
    year: String!
    make: String!
    model: String!
    price: String!
    personId: String!
  }

  type Query {
    people: [Person]
  }
`

const resolvers = {
  Query: {
    people: getPeople
  }
}

export { typeDefs, resolvers }
