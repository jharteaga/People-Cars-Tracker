import { EditTwoTone } from '@ant-design/icons'
import { Card } from 'antd'
import { useEffect } from 'react'
import { useState } from 'react'
import { RemoveCar } from '../buttons'
import UpdateCar from '../forms/UpdateCar'

const getStyles = () => ({
  card: {
    width: '100%',
    maxWidth: '350px',
    marginBottom: '1rem',
    borderRadius: '5px',
    borderColor: '#e0e0e0c6'
  },
  label: {
    fontWeight: '500'
  },
  title: {
    fontWeight: '600'
  }
})

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
})

const Car = ({ car }) => {
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
        <UpdateCar data={car} onEditMode={setIsEditMode} />
      ) : (
        <Card
          type="inner"
          style={styles.card}
          actions={[
            <EditTwoTone
              key="edit"
              onClick={() => setIsEditMode((prev) => !prev)}
            />,
            <RemoveCar data={car} />
          ]}
        >
          <p style={styles.title}>{`${car.make} ${car.model}`}</p>
          <p>
            <span style={styles.label}>Year:</span> {car.year}
          </p>
          <p>
            <span style={styles.label}>Price:</span>{' '}
            {formatter.format(car.price)}
          </p>
        </Card>
      )}
    </>
  )
}

export default Car
