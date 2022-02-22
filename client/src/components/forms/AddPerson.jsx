import { useEffect, useState } from 'react'
import { Button, Form, Input } from 'antd'

const AddPerson = ({ style }) => {
  const [form] = Form.useForm()
  const [, forcedUpdate] = useState()

  useEffect(() => {
    forcedUpdate({})
  }, [])

  return (
    <div style={style}>
      <h2 style={{ fontWeight: 'bold' }}>Add a new person</h2>
      <Form form={form} name="add-person-form" size="large" layout="vertical">
        <Input.Group compact>
          <Form.Item
            label="First name:"
            name="firstName"
            rules={[
              { required: true, message: 'Please input your first name' }
            ]}
            style={{ marginBottom: 20 }}
          >
            <Input placeholder="i.e. John" />
          </Form.Item>
          <Form.Item
            label="Last name:"
            name="lastName"
            rules={[{ required: true, message: 'Please input your last name' }]}
            style={{ marginBottom: 20, marginLeft: 20 }}
          >
            <Input placeholder="i.e. Smith" />
          </Form.Item>
        </Input.Group>
        <Form.Item shouldUpdate={true}>
          {() => (
            <Button
              type="primary"
              htmlType="submit"
              disabled={
                !form.isFieldsTouched(true) ||
                form.getFieldError().filter(({ errors }) => errors.length)
                  .length
              }
            >
              Add Person
            </Button>
          )}
        </Form.Item>
      </Form>
    </div>
  )
}

export default AddPerson
