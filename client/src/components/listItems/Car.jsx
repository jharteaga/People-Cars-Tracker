import { Card } from 'antd'
import { EditButton, RemoveCar } from '../buttons'

const getStyles = () => ({
  card: {
    width: '400px'
  }
})

const Car = ({ car }) => {
  console.log(car.personId)
  const styles = getStyles()
  return (
    <Card
      style={styles.card}
      actions={[<EditButton />, <RemoveCar data={car} />]}
    >{`${car.make} ${car.model}`}</Card>
  )
}

export default Car
