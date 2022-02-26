import { useQuery } from '@apollo/client'
import { Select } from 'antd'
import { GET_PEOPLE } from '../../queries'

const { Option } = Select

const PersonSelect = ({ value = '', onChange }) => {
  const { loading, error, data } = useQuery(GET_PEOPLE)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error {error.message}</p>

  const handleChange = (value) => {
    onChange(value)
  }

  return (
    <Select
      placeholder="Select a person"
      style={{ width: 250 }}
      value={value}
      onChange={(value) => handleChange(value)}
    >
      {data.people.map((person) => (
        <Option
          key={person.id}
          value={person.id}
        >{`${person.firstName} ${person.lastName}`}</Option>
      ))}
    </Select>
  )
}

export default PersonSelect
