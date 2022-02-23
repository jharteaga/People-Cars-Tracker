import moment from 'moment'
import { useMutation } from '@apollo/client'
import { Button, Modal } from 'antd'
import { UPDATE_CAR, UPDATE_PERSON } from '../../queries'

const FormModal = ({ type, isModalVisible, setIsModalVisible, render }) => {
  const [updatePerson] = useMutation(UPDATE_PERSON)
  const [updateCar] = useMutation(UPDATE_CAR)

  const onFinish = (values, id) => {
    if (type === 'Person') {
      handleUpdatePerson(values, id)
    } else {
      handleUpdateCar(values, id)
    }
    setIsModalVisible(false)
  }

  const handleUpdatePerson = (values, id) => {
    const { firstName, lastName } = values

    updatePerson({
      variables: {
        id,
        firstName,
        lastName
      },
      optimisticResponse: {
        __typename: 'Mutation',
        updatePerson: {
          __type: 'Person',
          id,
          firstName,
          lastName
        }
      }
    })
  }

  const handleUpdateCar = (values, id) => {
    const { make, model, year, price, personId } = values

    updateCar({
      variables: {
        id,
        year: moment(year).format('YYYY'),
        make,
        model,
        price: parseFloat(price),
        personId
      },
      optimisticResponse: {
        __typename: 'Mutation',
        updateCar: {
          __type: 'Car',
          id,
          year: moment(year).format('YYYY'),
          make,
          model,
          price: parseFloat(price),
          personId
        }
      }
    })
  }

  return (
    <Modal
      title={`Update ${type}`}
      visible={isModalVisible}
      onOk={() => setIsModalVisible(false)}
      onCancel={() => setIsModalVisible(false)}
      footer={[
        <Button key="cancel" onClick={() => setIsModalVisible(false)}>
          Cancel
        </Button>
      ]}
    >
      {render(onFinish)}
    </Modal>
  )
}

export default FormModal
