import { gql } from 'apollo-server'
import { getPeople, getPerson } from './controllers/person'
import { getCars, getCar } from './controllers/car'

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
    car(id: String!): Car
  }
`

const resolvers = {
  Query: {
    people: getPeople,
    person: getPerson,
    cars: getCars,
    car: getCar
  }
}

export { typeDefs, resolvers }
