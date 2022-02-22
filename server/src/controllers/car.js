import CarService from '../services/car'

export const getCars = () => {
  const response = CarService.getCars()
  return response
}

export const getCar = (_, args) => {
  const { id } = args
  return CarService.getCar(id)
}

export const addCar = (_, args) => {
  const { id, year, make, model, price, personId } = args
  return CarService.addCar(id, year, make, model, price, personId)
}

export const updateCar = (_, args) => {
  const { id, year, make, model, price, personId } = args
  return CarService.updateCar(id, year, make, model, price, personId)
}

export const removeCar = (_, args) => {
  const { id } = args
  return CarService.removeCar(id)
}
