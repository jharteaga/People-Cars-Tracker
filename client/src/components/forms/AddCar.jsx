import { useEffect, useState } from 'react'
import { useMutation } from '@apollo/client'
import { Button, DatePicker, Form, Input } from 'antd'
import { v4 as uuidv4 } from 'uuid'
import { ADD_CAR, GET_PEOPLE } from '../../queries'
import moment from 'moment'
import PersonSelect from './PersonSelect'

const AddCar = ({ style }) => {
  const [id] = useState(uuidv4())
  const [addCar] = useMutation(ADD_CAR)
  const [form] = Form.useForm()
  const [, forcedUpdate] = useState()

  useEffect(() => {
    forcedUpdate({})
  }, [])

  const onFinish = (values) => {
    const { year, make, model, price, personId } = values
    addCar({
      variables: {
        id,
        year: moment(year).get('YYYY'),
        make,
        model,
        price: parseFloat(price),
        personId
      },
      optimisticResponse: {
        __typename: 'Mutation',
        addCar: {
          __type: 'Car',
          id,
          year: moment(year).get('YYYY'),
          make,
          model,
          price: parseFloat(price),
          personId
        }
      },
      update: (proxy, { data: { addCar } }) => {
        const data = proxy.readQuery({ query: GET_PEOPLE })
        proxy.writeQuery({
          query: GET_PEOPLE,
          data: {
            ...data,
            people: [...data.people]
          }
        })
      }
    })
    form.resetFields()
  }
  return (
    <div style={style}>
      <h2 style={{ fontWeight: 'bold' }}>Add a new car</h2>
      <Form
        form={form}
        name="add-car-form"
        size="large"
        layout="vertical"
        onFinish={onFinish}
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
              { required: true, message: 'Please input the year of the car' }
            ]}
            style={{ marginBottom: 10 }}
          >
            <DatePicker picker="year" name="year" size="large" />
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
          name="personId"
          rules={[
            { required: true, message: 'Please select the owner of the car' }
          ]}
          style={{ marginBottom: 30 }}
        >
          <PersonSelect />
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
    </div>
  )
}

export default AddCar
