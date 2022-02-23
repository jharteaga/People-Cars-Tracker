import React, { useState } from 'react'
import { Modal } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { useMutation } from '@apollo/client'
import { GET_PEOPLE, REMOVE_PERSON } from '../../queries'

const RemovePerson = ({ data }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const [removePerson] = useMutation(REMOVE_PERSON, {
    update(proxy, { data: { removePerson } }) {
      const { people } = proxy.readQuery({ query: GET_PEOPLE })
      proxy.writeQuery({
        query: GET_PEOPLE,
        data: {
          people: people.filter((p) => p.id !== removePerson.id)
        }
      })
    }
  })

  const handleConfirmation = () => {
    handleRemove(data)
    setIsModalVisible(false)
  }

  const handleRemove = ({ id, ...rest }) => {
    // let result = window.confirm('Are you sure you want to delete this person?')
    // if (result) {
    removePerson({
      variables: {
        id
      },
      optimisticResponse: {
        __typename: 'Mutation',
        removePerson: {
          __typename: 'Person',
          id,
          ...rest
        }
      }
    })
    // }
  }

  return (
    <>
      <DeleteOutlined
        key="remove"
        style={{ color: '#f00' }}
        onClick={() => setIsModalVisible(true)}
      />
      <Modal
        title="Remove person"
        visible={isModalVisible}
        onOk={handleConfirmation}
        onCancel={() => setIsModalVisible(false)}
      >
        <p>
          Are you sure you want to remove the person:{' '}
          <strong>
            {data.firstName} {data.lastName}
          </strong>
        </p>
      </Modal>
    </>
  )
}

export default RemovePerson
