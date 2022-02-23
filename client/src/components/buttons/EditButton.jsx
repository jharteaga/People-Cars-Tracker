import { useState } from 'react'
import { EditTwoTone } from '@ant-design/icons'
import FormModal from '../modals/FormModal'
import UpdatePerson from '../forms/UpdatePerson'

const EditButton = ({ data }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const updatePersonForm = (onFinish) => (
    <UpdatePerson data={data} handleOnFinish={onFinish} />
  )

  return (
    <>
      <EditTwoTone key="edit" onClick={() => setIsModalVisible(true)} />
      <FormModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        render={updatePersonForm}
      />
    </>
  )
}

export default EditButton
