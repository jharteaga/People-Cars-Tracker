import { useState } from 'react'
import { filter } from 'lodash'
import { useMutation } from '@apollo/client'
import { DeleteOutlined } from '@ant-design/icons'
import ModalConfirmation from '../layout/ModalConfirmation'

import { GET_PEOPLE, REMOVE_PERSON } from '../../queries'

const RemovePerson = ({ data }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const [removePerson] = useMutation(REMOVE_PERSON, {
    update(proxy, { data: { removePerson } }) {
      const { people } = proxy.readQuery({ query: GET_PEOPLE })
      proxy.writeQuery({
        query: GET_PEOPLE,
        data: {
          people: filter(people, (p) => {
            return p.id !== removePerson.id
          })
        }
      })
    }
  })

  const handleRemove = () => {
    const { id, firstName, lastName, cars } = data

    removePerson({
      variables: {
        id
      },
      optimisticResponse: {
        __typename: 'Mutation',
        removePerson: {
          __typename: 'Person',
          id,
          firstName,
          lastName,
          cars
        }
      }
    })
  }

  return (
    <>
      <DeleteOutlined
        key="remove"
        style={{ color: '#f00' }}
        onClick={() => setIsModalVisible(true)}
      />
      <ModalConfirmation
        isVisible={isModalVisible}
        onChange={setIsModalVisible}
        onConfirm={handleRemove}
        message={`Are you sure you want to delete the person: ${data.firstName} ${data.lastName}?`}
      />
    </>
  )
}

export default RemovePerson
