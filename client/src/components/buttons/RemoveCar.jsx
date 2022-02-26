import { useState } from 'react'
import { DeleteOutlined } from '@ant-design/icons'
import { useMutation } from '@apollo/client'
import { GET_PEOPLE, REMOVE_CAR } from '../../queries'
import ModalConfirmation from '../layout/ModalConfirmation'

const RemoveCar = ({ data }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const [removeCar] = useMutation(REMOVE_CAR, {
    update(proxy, { data: { removeCar } }) {
      const { people } = proxy.readQuery({
        query: GET_PEOPLE
      })
      proxy.writeQuery({
        query: GET_PEOPLE,
        data: {
          people: people.map((p) => {
            const carsUpdated = p.cars.filter((c) => c.id !== removeCar.id)
            return { ...p, cars: carsUpdated }
          })
        }
      })
    }
  })

  const handleRemove = () => {
    const { id, year, make, model, price, personId } = data

    removeCar({
      variables: {
        id
      },
      optimisticResponse: {
        __typename: 'Mutation',
        removeCar: {
          __typename: 'Car',
          id,
          year,
          make,
          model,
          price,
          personId
        }
      }
    })
  }

  return (
    <>
      <DeleteOutlined
        key="delete"
        style={{ color: '#f00' }}
        onClick={() => setIsModalVisible(true)}
      />
      <ModalConfirmation
        isVisible={isModalVisible}
        onChange={setIsModalVisible}
        onConfirm={handleRemove}
        message={`Are you sure you want to delete the car: ${data.make} ${data.model}?`}
      />
    </>
  )
}

export default RemoveCar
