import CarService from '../services/car'

export const getCars = () => {
  const response = CarService.getCars()
  return response
}
