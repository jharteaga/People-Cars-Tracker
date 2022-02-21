import { cars } from '../data/peopleCarsScheme'

class CarService {
  static getCars() {
    return cars
  }

  static getCar(carId) {
    const response = cars.find((car) => car.id === carId)

    if (!response) {
      throw new Error(`Car with id ${carId} not found`)
    }

    return response
  }
}

export default CarService
