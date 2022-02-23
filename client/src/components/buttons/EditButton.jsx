import { useState } from 'react'
import { EditTwoTone } from '@ant-design/icons'
import FormModal from '../modals/FormModal'
import UpdatePerson from '../forms/UpdatePerson'
import UpdateCar from '../forms/UpdateCar'

const EditButton = ({ data, type }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const updatePersonForm = (onFinish) => (
    <UpdatePerson data={data} handleOnFinish={onFinish} />
  )

  const updateCarForm = (onFinish) => (
    <UpdateCar data={data} handleOnFinish={onFinish} />
  )

  return (
    <>
      <EditTwoTone key="edit" onClick={() => setIsModalVisible(true)} />
      <FormModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        type={type}
        render={type === 'Person' ? updatePersonForm : updateCarForm}
      />
    </>
  )
}

export default EditButton
