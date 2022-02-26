import { useEffect, useState } from 'react'
import { Button, DatePicker, Form, Input } from 'antd'
import moment from 'moment'
import { useMutation } from '@apollo/client'
import { GET_PEOPLE, UPDATE_CAR } from '../../queries'
import PersonSelect from './PersonSelect'

const UpdateCar = ({ data, onEditMode }) => {
  const [lastOwner] = useState(data.personId)
  const [car, setCar] = useState({
    id: data.id,
    make: data.make,
    model: data.model,
    year: moment(data.year, 'YYYY'),
    price: data.price,
    personId: data.personId
  })

  const [updateCar] = useMutation(UPDATE_CAR)
  const [form] = Form.useForm()
  const [, forcedUpdate] = useState()

  useEffect(() => {
    forcedUpdate({})
  }, [])

  const onFinish = (values) => {
    const { make, model, year, price, personId } = values

    updateCar({
      variables: {
        id: car.id,
        year: moment(year).format('YYYY'),
        make,
        model,
        price: parseFloat(price),
        personId
      },
      optimisticResponse: {
        __typename: 'Mutation',
        updateCar: {
          __typename: 'Car',
          id: car.id,
          year: moment(year).format('YYYY'),
          make,
          model,
          price: parseFloat(price),
          personId
        }
      },
      update: (proxy, { data: { updateCar } }) => {
        const data = proxy.readQuery({ query: GET_PEOPLE })
        proxy.writeQuery({
          query: GET_PEOPLE,
          data: {
            ...data,
            people: data.people.map((person) => {
              if (person.id === updateCar.personId) {
                return { ...person, cars: [...person.cars, updateCar] }
              }
              if (person.id === lastOwner) {
                return {
                  ...person,
                  cars: person.cars.filter((c) => c.id !== car.id)
                }
              }
              return person
            })
          }
        })
      }
    })
    onEditMode(false)
    form.resetFields()
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setCar((prev) => {
      return { ...prev, [name]: value }
    })
  }

  const handleSelectChange = (value) => {
    setCar((prev) => {
      return { ...prev, personId: value }
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
        <PersonSelect value={car.personId} onChange={handleSelectChange} />
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
