import { Card } from 'antd'
import { EditButton, RemovePerson } from '../buttons'

const getStyles = () => ({
  card: {
    width: '400px'
  }
})

const Person = ({ person }) => {
  const styles = getStyles()
  return (
    <Card
      style={styles.card}
      actions={[<EditButton />, <RemovePerson data={person} />]}
    >{`${person.firstName} ${person.lastName}`}</Card>
  )
}

export default Person
