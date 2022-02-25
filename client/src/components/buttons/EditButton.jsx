import { EditTwoTone } from '@ant-design/icons'
import UpdatePerson from '../forms/UpdatePerson'
import UpdateCar from '../forms/UpdateCar'

const EditButton = ({ data, type }) => {
  const updatePersonForm = (onFinish) => (
    <UpdatePerson data={data} handleOnFinish={onFinish} />
  )

  const updateCarForm = (onFinish) => (
    <UpdateCar data={data} handleOnFinish={onFinish} />
  )

  return (
    <>
      <EditTwoTone key="edit" />
    </>
  )
}

export default EditButton
