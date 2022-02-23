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
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 1,
          md: 2,
          lg: 3,
          xl: 3,
          xxl: 3
        }}
        dataSource={data[type]}
        renderItem={(item) => (
          <List.Item key={item.id}>{render(item)}</List.Item>
        )}
      />
    </div>
  )
}

export default DataList
