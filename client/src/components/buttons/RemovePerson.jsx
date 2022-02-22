import { DeleteOutlined } from '@ant-design/icons'
import { useMutation } from '@apollo/client'
import { GET_PEOPLE, REMOVE_PERSON } from '../../queries'

const RemovePerson = ({ data }) => {
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

  const handleRemove = ({ id, ...rest }) => {
    let result = window.confirm('Are you sure you want to delete this person?')
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
            ...rest
          }
        }
      })
    }
  }

  return (
    <DeleteOutlined
      key="remove"
      style={{ color: '#f00' }}
      onClick={() => handleRemove(data)}
    />
  )
}

export default RemovePerson
