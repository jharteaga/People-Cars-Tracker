import { Card } from 'antd'
import { EditButton, RemovePerson } from '../buttons'

const getStyles = () => ({
  card: {
    width: '300px',
    maxWidth: '100%'
  }
})

const Person = ({ person }) => {
  const styles = getStyles()
  return (
    <Card
      style={styles.card}
      actions={[
        <EditButton type="Person" data={person} />,
        <RemovePerson data={person} />
      ]}
    >{`${person.firstName} ${person.lastName}`}</Card>
  )
}

export default Person
