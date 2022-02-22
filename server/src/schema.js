import { gql } from 'apollo-server'
import {
  addPerson,
  getPeople,
  getPerson,
  getPersonWithCars,
  removePerson,
  updatePerson
} from './controllers/person'
import { addCar, getCars, getCar } from './controllers/car'

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
    price: Float!
    personId: String!
  }

  type PersonWithCars {
    personId: String!
    firstName: String!
    lastName: String!
    cars: [Car]
  }

  type Query {
    people: [Person]
    cars: [Car]
    person(id: String!): Person
    car(id: String!): Car
    personWithCars(personId: String!): PersonWithCars
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
    person: getPerson,
    cars: getCars,
    car: getCar,
    personWithCars: getPersonWithCars
  },
  Mutation: {
    addPerson: addPerson,
    updatePerson: updatePerson,
    removePerson: removePerson,
    addCar: addCar
  }
}

export { typeDefs, resolvers }
