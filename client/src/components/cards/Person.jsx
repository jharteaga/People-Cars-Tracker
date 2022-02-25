import { Card } from 'antd'
import { EditButton, RemovePerson } from '../buttons'
import Car from './Car'

const getStyles = () => ({
  card: {
    width: '100%',
    maxWidth: '100%'
  },
  carsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem'
  },
  name: {
    fontWeight: 'bold'
  }
})

const Person = ({ person }) => {
  const styles = getStyles()
  return (
    <Card
      style={styles.card}
      actions={[
        <small>Learn More</small>,
        <EditButton type="Person" data={person} />,
        <RemovePerson data={person} />
      ]}
    >
      <p style={styles.name}>{`${person.firstName} ${person.lastName}`}</p>
      <div style={styles.carsContainer}>
        {person.cars?.map((car) => (
          <Car car={car} key={car.id} />
        ))}
      </div>
    </Card>
  )
}

export default Person
