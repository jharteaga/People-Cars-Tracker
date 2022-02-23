import React, { useState } from 'react'
import { Modal } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { useMutation } from '@apollo/client'
import { GET_CARS, REMOVE_CAR } from '../../queries'

const RemoveCar = ({ data }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const [removeCar] = useMutation(REMOVE_CAR, {
    update(proxy, { data: { removeCar } }) {
      const { cars } = proxy.readQuery({ query: GET_CARS })
      proxy.writeQuery({
        query: GET_CARS,
        data: {
          cars: cars.filter((c) => c.id !== removeCar.id)
        }
      })
    }
  })

  const handleConfirmation = () => {
    handleRemove(data)
    setIsModalVisible(false)
  }

  const handleRemove = ({ id, ...rest }) => {
    removeCar({
      variables: {
        id
      },
      optimisticResponse: {
        __typename: 'Mutation',
        removeCar: {
          __typename: 'Car',
          id,
          ...rest
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
      <Modal
        title="Remove car"
        visible={isModalVisible}
        onOk={handleConfirmation}
        onCancel={() => setIsModalVisible(false)}
      >
        <p>
          Are you sure you want to remove the car:{' '}
          <strong>
            {data.make} {data.model}
          </strong>
          ?
        </p>
      </Modal>
    </>
  )
}

export default RemoveCar
