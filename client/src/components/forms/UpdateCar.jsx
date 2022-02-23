import { useEffect, useState } from 'react'
import { Button, DatePicker, Form, Input, InputNumber, Select } from 'antd'
import moment from 'moment'

const { Option } = Select

const UpdateCar = ({ data, handleOnFinish }) => {
  const [car, setCar] = useState({
    id: data.id,
    make: data.make,
    model: data.model,
    year: moment(data.year, 'YYYY'),
    price: data.price,
    personId: data.personId
  })

  const [form] = Form.useForm()
  const [, forcedUpdate] = useState()

  useEffect(() => {
    forcedUpdate({})
  }, [])

  const onFinish = (values) => {
    handleOnFinish(values, car.id)
    form.resetFields()
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setCar((prev) => {
      return { ...prev, [name]: value }
    })
  }

  const handleDateChange = (date, dateString) => {
    setCar((prev) => {
      return { ...prev, year: moment(dateString, 'YYYY') }
    })
  }

  return (
    <Form
      form={form}
      name="update-car-form"
      size="large"
      layout="vertical"
      onFinish={onFinish}
      initialValues={car}
    >
      <Input.Group compact>
        <Form.Item
          label="Make:"
          name="make"
          rules={[
            { required: true, message: 'Please input the make of the car' }
          ]}
          style={{ marginBottom: 10 }}
        >
          <Input
            placeholder="i.e. Toyota"
            value={car.make}
            name="make"
            onChange={(e) => handleChange(e)}
          />
        </Form.Item>
        <Form.Item
          label="Model:"
          name="model"
          rules={[
            { required: true, message: 'Please input the model of the car' }
          ]}
          style={{ marginBottom: 10, marginLeft: 20 }}
        >
          <Input
            placeholder="i.e. Corolla"
            value={car.model}
            name="model"
            onChange={(e) => handleChange(e)}
          />
        </Form.Item>
      </Input.Group>
      <Input.Group compact>
        <Form.Item
          label="Year:"
          name="year"
          rules={[
            { required: true, message: 'Please input the year of the car' }
          ]}
          style={{ marginBottom: 10 }}
        >
          <DatePicker
            picker="year"
            name="year"
            size="large"
            onChange={handleDateChange}
            value={moment(car.year, 'YYYY')}
          />
        </Form.Item>
        <Form.Item
          label="Price:"
          name="price"
          rules={[
            { required: true, message: 'Please input the price of the car' }
          ]}
          style={{ marginBottom: 10, marginLeft: 20 }}
        >
          <Input
            prefix="$"
            name="price"
            placeholder="5000"
            type={'number'}
            min={0}
            value={car.price}
            onChange={(e) => handleChange(e)}
            decimalSeparator={'.'}
          />
        </Form.Item>
      </Input.Group>
      <Form.Item
        label="Owner:"
        name="personId"
        rules={[
          { required: true, message: 'Please select the owner of the car' }
        ]}
        style={{ marginBottom: 30 }}
      >
        <Select
          placeholder="Select a person"
          style={{ width: 250 }}
          value={car.personId}
          name="personId"
        >
          <Option value="1">Bill Gates</Option>
        </Select>
      </Form.Item>
      <Form.Item shouldUpdate={true}>
        {() => (
          <Button type="primary" htmlType="submit">
            Update Car
          </Button>
        )}
      </Form.Item>
    </Form>
  )
}

export default UpdateCar
