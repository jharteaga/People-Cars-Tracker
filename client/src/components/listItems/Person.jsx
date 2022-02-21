import { Card } from 'antd'
import { EditOutlined } from '@ant-design/icons'

const getStyles = (props) => ({
  card: {
    width: '500px'
  }
})

const Person = ({ person: { firstName, lastName } }) => {
  const styles = getStyles()
  return (
    <Card
      style={styles.card}
      actions={[<EditOutlined key="edit" />]}
    >{`${firstName} ${lastName}`}</Card>
  )
}

export default Person
