import { gql } from 'apollo-server'
import {
  addPerson,
  getPeople,
  getPersonWithCars,
  removePerson,
  updatePerson
} from './controllers/person'
import { addCar, removeCar, updateCar } from './controllers/car'

const typeDefs = gql`
  type Person {
    id: String!
    firstName: String!
    lastName: String!
    cars: [Car!]
  }

  type Car {
    id: String!
    year: String!
    make: String!
    model: String!
    price: Float!
    personId: String!
  }

  type Query {
    people: [Person]
    personWithCars(personId: String!): Person
  }

  type Mutation {
    addPerson(id: String!, firstName: String!, lastName: String!): Person
    updatePerson(id: String!, firstName: String!, lastName: String!): Person
    removePerson(id: String!): Person
    addCar(
      id: String!
      year: String!
      make: String!
      model: String!
      price: Float!
      personId: String!
    ): Car
    updateCar(
      id: String!
      year: String!
      make: String!
      model: String!
      price: Float!
      personId: String!
    ): Car
    removeCar(id: String!): Car
  }
`

const resolvers = {
  Query: {
    people: getPeople,
    personWithCars: getPersonWithCars
  },
  Mutation: {
    addPerson: addPerson,
    updatePerson: updatePerson,
    removePerson: removePerson,
    addCar: addCar,
    updateCar: updateCar,
    removeCar: removeCar
  }
}

export { typeDefs, resolvers }
