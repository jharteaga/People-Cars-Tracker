import { useQuery } from '@apollo/client'
import { List } from 'antd'
import { GET_PEOPLE } from '../../queries'
import Person from '../listItems/Person'

const getSyles = () => ({
  list: {
    display: 'flex',
    justifyContent: 'center'
  }
})

const People = () => {
  const styles = getSyles()
  const { loading, error, data } = useQuery(GET_PEOPLE)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error {error.message}</p>

  return (
    <List grid={{ gutter: 20, column: 1 }} style={styles.list}>
      {data.people.map((person) => (
        <List.Item key={person.id}>
          <Person key={person.id} person={person} />
        </List.Item>
      ))}
    </List>
  )
}

export default People
