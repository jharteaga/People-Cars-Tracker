import { useEffect, useState } from 'react'
import { Button, DatePicker, Form, Input, Select } from 'antd'

const { Option } = Select

const AddCar = () => {
  const [form] = Form.useForm()
  const [, forcedUpdate] = useState()

  useEffect(() => {
    forcedUpdate({})
  }, [])

  return (
    <>
      <h2>Add a new car</h2>
      <Form form={form} name="add-car-form" size="large" layout="vertical">
        <Input.Group compact>
          <Form.Item
            label="Make:"
            name="make"
            rules={[
              { required: true, message: 'Please input the make of the car' }
            ]}
            style={{ marginBottom: 10 }}
          >
            <Input placeholder="i.e. Toyota" />
          </Form.Item>
          <Form.Item
            label="Model:"
            name="model"
            rules={[
              { required: true, message: 'Please input the model of the car' }
            ]}
            style={{ marginBottom: 10, marginLeft: 20 }}
          >
            <Input placeholder="i.e. Corolla" />
          </Form.Item>
        </Input.Group>
        <Input.Group compact>
          <Form.Item
            label="Year:"
            name="year"
            rules={[
              { required: true, message: 'Please input the year of the car' },
              {
                pattern: /^\d{4}$/,
                message: 'Please input a valid year'
              }
            ]}
            style={{ marginBottom: 10 }}
          >
            <DatePicker picker="year" size="large" />
          </Form.Item>
          <Form.Item
            label="Price:"
            name="price"
            rules={[
              { required: true, message: 'Please input the price of the car' }
            ]}
            style={{ marginBottom: 10, marginLeft: 20 }}
          >
            <Input prefix="$" placeholder="5000" type={'number'} min={0} />
          </Form.Item>
        </Input.Group>
        <Form.Item
          label="Owner:"
          name="owner"
          rules={[
            { required: true, message: 'Please select the owner of the car' }
          ]}
          style={{ marginBottom: 30 }}
        >
          <Select placeholder="Select a person" style={{ width: 250 }}>
            <Option value="jack">Jack</Option>
          </Select>
        </Form.Item>
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
              Add Car
            </Button>
          )}
        </Form.Item>
      </Form>
    </>
  )
}

export default AddCar
