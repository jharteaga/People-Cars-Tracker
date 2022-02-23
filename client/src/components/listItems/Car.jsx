import { Card } from 'antd'
import { EditButton, RemoveCar } from '../buttons'

const getStyles = () => ({
  card: {
    width: '100%',
    maxWidth: '350px'
  }
})

const Car = ({ car }) => {
  const styles = getStyles()
  return (
    <Card
      style={styles.card}
      actions={[<EditButton />, <RemoveCar data={car} />]}
    >{`${car.make} ${car.model}`}</Card>
  )
}

export default Car
