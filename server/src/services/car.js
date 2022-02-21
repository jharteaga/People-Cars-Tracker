import { cars } from '../data/peopleCarsScheme'

class CarService {
  static getCars() {
    return cars
  }

  static getCar(carId) {
    return cars.find((car) => car.id === carId)
  }
}

export default CarService
