import { useQuery } from '@apollo/client'
import { Divider, List } from 'antd'

const DataList = ({ type, query, render }) => {
  const { loading, error, data } = useQuery(query)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error {error.message}</p>

  return (
    <div>
      <Divider orientation="left">
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </Divider>
      <List>
        {data[type].map((item) => (
          <List.Item key={item.id}>{render(item)}</List.Item>
        ))}
      </List>
    </div>
  )
}

export default DataList
