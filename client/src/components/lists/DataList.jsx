import { useQuery } from '@apollo/client'
import { List } from 'antd'

const DataList = ({ query, render }) => {
  const { loading, error, data } = useQuery(query)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error {error.message}</p>

  return (
    <List
      dataSource={data.people}
      renderItem={(item) => <List.Item key={item.id}>{render(item)}</List.Item>}
    />
  )
}

export default DataList
