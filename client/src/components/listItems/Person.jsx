import { Card } from 'antd'
import { EditButton, RemoveButton } from '../buttons'

const getStyles = () => ({
  card: {
    width: '400px'
  }
})

const Person = ({ person: { firstName, lastName } }) => {
  const styles = getStyles()
  return (
    <Card
      style={styles.card}
      actions={[<EditButton />, <RemoveButton />]}
    >{`${firstName} ${lastName}`}</Card>
  )
}

export default Person
