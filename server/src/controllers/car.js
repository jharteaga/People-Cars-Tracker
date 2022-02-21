import CarService from '../services/car'

export const getCars = () => {
  const response = CarService.getCars()
  return response
}

export const getCar = (_, args) => {
  const { id } = args
  return CarService.getCar(id)
}
