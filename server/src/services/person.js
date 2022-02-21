import { people, cars } from '../data/peopleCarsScheme'

class PersonService {
  static getPeople() {
    return people
  }

  static getPerson(personId) {
    return people.find((person) => person.id === personId)
  }

  static getPersonWithCars(personId) {
    const person = people.find((person) => person.id === personId)
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
