import { DeleteOutlined } from '@ant-design/icons'
import { useMutation } from '@apollo/client'
import { GET_PEOPLE, REMOVE_PERSON } from '../../queries'
import { filter } from 'lodash'

const RemovePerson = ({ data }) => {
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
    let result = window.confirm(
      `Are you sure you want to delete the person: ${data.firstName} ${data.lastName}?`
    )
    if (result) {
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
  }

  return (
    <DeleteOutlined
      key="remove"
      style={{ color: '#f00' }}
      onClick={handleRemove}
    />
  )
}

export default RemovePerson
