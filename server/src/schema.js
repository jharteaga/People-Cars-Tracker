import { gql } from 'apollo-server'
import { getPeople } from './controllers/person'
import { getCars } from './controllers/car'

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
    cars: [Car]
  }
`

const resolvers = {
  Query: {
    people: getPeople,
    cars: getCars
  }
}

export { typeDefs, resolvers }
