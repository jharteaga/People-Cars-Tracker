import PersonService from '../services/person'

export const getPeople = () => {
  const response = PersonService.getPeople()
  return response
}
