import { cars } from '../data/peopleCarsScheme'

class CarService {
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

  static updateCar(id, year, make, model, price, personId) {
    const car = cars.find((car) => car.id === id)

    if (!car) {
      throw new Error(`Car with id ${id} not found`)
    }

    car.year = year
    car.make = make
    car.model = model
    car.price = price
    car.personId = personId

    cars.forEach((c) => {
      if (c.id === id) {
        c = car
      }
      return c
    })

    return car
  }

  static removeCar(carId) {
    const car = cars.find((car) => car.id === carId)

    if (!car) {
      throw new Error(`Car with id ${carId} not found`)
    }

    cars.splice(cars.indexOf(car), 1)

    return car
  }
}

export default CarService
