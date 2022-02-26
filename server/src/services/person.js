import { people, cars } from '../data/peopleCarsScheme'

class PersonService {
  static getPeople() {
    return people.map((person) => {
      const carsOfPerson = cars.filter((car) => car.personId === person.id)
      return { ...person, cars: carsOfPerson }
    })
  }

  static getPersonWithCars(id) {
    const person = people.find((person) => person.id === id)

    if (!person) {
      throw new Error(`Person with id ${id} not found`)
    }

    const personCars = cars.filter((car) => car.personId === id)
    return {
      id: person.id,
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

  static removePerson(id) {
    const person = people.find((person) => person.id === id)

    if (!person) {
      throw new Error(`Person with id ${id} not found`)
    }

    people.splice(people.indexOf(person), 1)

    return person
  }
}

export default PersonService
