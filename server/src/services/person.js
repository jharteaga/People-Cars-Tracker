import { people } from '../data/peopleCarsScheme'

class PersonService {
  static getPeople() {
    return people
  }

  static getPerson(personId) {
    return people.find((person) => person.id === personId)
  }
}

export default PersonService
