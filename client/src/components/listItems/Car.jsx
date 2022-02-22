import { Card } from 'antd'
import { EditOutlined } from '@ant-design/icons'

const getStyles = (props) => ({
  card: {
    width: '400px'
  }
})

const Car = ({ car: { make, model, year, price } }) => {
  const styles = getStyles()
  return (
    <Card
      style={styles.card}
      actions={[<EditOutlined key="edit" />]}
    >{`${make} ${model}`}</Card>
  )
}

export default Car
