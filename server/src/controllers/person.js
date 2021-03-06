import PersonService from '../services/person'

export const getPeople = () => {
  return PersonService.getPeople()
}

export const getPersonWithCars = (_, args) => {
  const { id } = args
  return PersonService.getPersonWithCars(id)
}

export const addPerson = (_, args) => {
  const { id, firstName, lastName } = args
  return PersonService.addPerson(id, firstName, lastName)
}

export const updatePerson = (_, args) => {
  const { id, firstName, lastName } = args
  return PersonService.updatePerson(id, firstName, lastName)
}

export const removePerson = (_, args) => {
  const { id } = args
  return PersonService.removePerson(id)
}
