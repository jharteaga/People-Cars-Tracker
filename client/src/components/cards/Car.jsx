import { EditTwoTone } from '@ant-design/icons'
import { Card } from 'antd'
import { RemoveCar } from '../buttons'

const getStyles = () => ({
  card: {
    width: '100%',
    maxWidth: '350px',
    marginBottom: '1rem'
  },
  label: {
    fontWeight: '500'
  },
  title: {
    fontWeight: '600'
  }
})

const Car = ({ car }) => {
  const styles = getStyles()
  return (
    <Card
      type="inner"
      style={styles.card}
      actions={[<EditTwoTone key="edit" />, <RemoveCar data={car} />]}
    >
      <p style={styles.title}>{`${car.make} ${car.model}`}</p>
      <p>
        <span style={styles.label}>Year:</span> {car.year}
      </p>
      <p>
        <span style={styles.label}>Price:</span> {car.price}
      </p>
    </Card>
  )
}

export default Car
