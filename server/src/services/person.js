import { people, cars } from '../data/peopleCarsScheme'

class PersonService {
  static getPeople() {
    return people
  }

  static getPerson(personId) {
    const response = people.find((person) => person.id === personId)

    if (!response) {
      throw new Error(`Person with id ${personId} not found`)
    }

    return response
  }

  static getPersonWithCars(personId) {
    const person = people.find((person) => person.id === personId)

    if (!person) {
      throw new Error(`Person with id ${personId} not found`)
    }

    const personCars = cars.filter((car) => car.personId === personId)
    return {
      personId: person.id,
      firstName: person.firstName,
      lastName: person.lastName,
      cars: personCars
    }
  }
}

export default PersonService
