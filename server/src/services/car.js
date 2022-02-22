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

  static addCar(id, year, make, model, price, personId) {
    if (cars.find((car) => car.id === id)) {
      throw new Error(`Car with id ${id} already exists`)
    }

    const car = {
      id,
      year,
      make,
      model,
      price,
      personId
    }

    cars.push(car)

    return car
  }
}

export default CarService
