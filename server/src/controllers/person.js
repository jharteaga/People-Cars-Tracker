import PersonService from '../services/person'

export const getPeople = () => {
  return PersonService.getPeople()
}

export const getPerson = (_, args) => {
  const { id } = args
  return PersonService.getPerson(id)
}
