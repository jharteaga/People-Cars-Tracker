import { Card } from 'antd'
import { EditButton, RemoveButton } from '../buttons'

const getStyles = () => ({
  card: {
    width: '400px'
  }
})

const Car = ({ car: { make, model, year, price } }) => {
  const styles = getStyles()
  return (
    <Card
      style={styles.card}
      actions={[<EditButton />, <RemoveButton />]}
    >{`${make} ${model}`}</Card>
  )
}

export default Car
