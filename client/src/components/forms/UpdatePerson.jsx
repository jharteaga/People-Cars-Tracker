import { useEffect, useState } from 'react'
import { Button, Form, Input } from 'antd'

const UpdatePerson = ({ data, handleOnFinish }) => {
  const [person, setPerson] = useState({
    id: data.id,
    firstName: data.firstName,
    lastName: data.lastName
  })

  const [form] = Form.useForm()
  const [, forcedUpdate] = useState()

  useEffect(() => {
    forcedUpdate({})
  }, [])

  const onFinish = (values) => {
    handleOnFinish(values, person.id)
    form.resetFields()
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setPerson((prev) => {
      return { ...prev, [name]: value }
    })
  }

  return (
    <Form
      form={form}
      name="update-person-form"
      size="large"
      layout="vertical"
      onFinish={onFinish}
      initialValues={person}
    >
      <Input.Group compact>
        <Form.Item
          label="First name:"
          name="firstName"
          rules={[{ required: true, message: 'Please input your first name' }]}
          style={{ marginBottom: 20 }}
        >
          <Input
            placeholder="i.e. John"
            name="firstName"
            onChange={(e) => handleChange(e)}
            value={person.firstName}
          />
        </Form.Item>
        <Form.Item
          label="Last name:"
          name="lastName"
          rules={[{ required: true, message: 'Please input your last name' }]}
          style={{ marginBottom: 20, marginLeft: 20 }}
        >
          <Input
            placeholder="i.e. Smith"
            name="lastName"
            onChange={(e) => handleChange(e)}
            value={person.lastName}
          />
        </Form.Item>
      </Input.Group>
      <Form.Item shouldUpdate={true}>
        {() => (
          <Button type="primary" htmlType="submit">
            Update Person
          </Button>
        )}
      </Form.Item>
    </Form>
  )
}

export default UpdatePerson
