import { useMutation } from '@apollo/client'
import { Button, Modal } from 'antd'
import { UPDATE_PERSON } from '../../queries'

const FormModal = ({ isModalVisible, setIsModalVisible, render }) => {
  const [updatePerson] = useMutation(UPDATE_PERSON)

  const onFinish = (values, id) => {
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
    setIsModalVisible(false)
  }

  return (
    <Modal
      title="Update person"
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
