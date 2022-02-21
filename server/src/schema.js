import { gql } from 'apollo-server'
import { getPeople, getPerson } from './controllers/person'
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
    person(id: String!): Person
  }
`

const resolvers = {
  Query: {
    people: getPeople,
    cars: getCars,
    person: getPerson
  }
}

export { typeDefs, resolvers }
