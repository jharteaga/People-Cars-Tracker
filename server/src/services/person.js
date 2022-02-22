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

  static addPerson(id, firstName, lastName) {
    if (people.find((person) => person.id === id)) {
      throw new Error(`Person with id ${id} already exists`)
    }

    const person = {
      id,
      firstName,
      lastName
    }

    people.push(person)

    return person
  }

  static updatePerson(id, firstName, lastName) {
    const person = people.find((person) => person.id === id)

    if (!person) {
      throw new Error(`Person with id ${id} not found`)
    }

    person.firstName = firstName
    person.lastName = lastName

    people.forEach((p) => {
      if (p.id === id) {
        p = person
      }
      return p
    })

    return person
  }
}

export default PersonService
