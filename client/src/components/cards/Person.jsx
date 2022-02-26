import { useEffect, useState } from 'react'
import { Card } from 'antd'
import { EditTwoTone } from '@ant-design/icons'
import { RemovePerson } from '../buttons'
import Car from './Car'
import UpdatePerson from '../forms/UpdatePerson'

const getStyles = () => ({
  card: {
    width: '100%',
    maxWidth: '100%',
    margin: '1rem 0'
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
  const [isEditMode, setIsEditMode] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  const styles = getStyles()

  useEffect(() => {
    setIsMounted(true)

    return () => setIsMounted(false)
  }, [])

  return (
    <>
      {isMounted && isEditMode ? (
        <UpdatePerson data={person} onEditMode={setIsEditMode} />
      ) : (
        <Card
          style={styles.card}
          actions={[
            <small>Learn More</small>,
            <EditTwoTone
              key="edit"
              onClick={() => setIsEditMode((prev) => !prev)}
            />,
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
      )}
    </>
  )
}

export default Person
