import { DeleteOutlined } from '@ant-design/icons'
import { useMutation } from '@apollo/client'
import { GET_CARS, REMOVE_CAR } from '../../queries'

const RemoveCar = ({ data }) => {
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

  const handleRemove = ({ id, ...rest }) => {
    let result = window.confirm('Are you sure you want to delete this car?')
    if (result) {
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
  }

  return (
    <DeleteOutlined
      key="delete"
      style={{ color: '#f00' }}
      onClick={() => handleRemove(data)}
    />
  )
}

export default RemoveCar
