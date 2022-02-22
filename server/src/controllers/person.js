import PersonService from '../services/person'

export const getPeople = () => {
  return PersonService.getPeople()
}

export const getPerson = (_, args) => {
  const { id } = args
  return PersonService.getPerson(id)
}

export const getPersonWithCars = (_, args) => {
  const { personId } = args
  return PersonService.getPersonWithCars(personId)
}

export const addPerson = (_, args) => {
  const { id, firstName, lastName } = args
  return PersonService.addPerson(id, firstName, lastName)
}

export const updatePerson = (_, args) => {
  const { id, firstName, lastName } = args
  return PersonService.updatePerson(id, firstName, lastName)
}
