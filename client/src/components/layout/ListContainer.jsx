import DataList from '../lists/DataList'
import { GET_PEOPLE } from '../../queries'
import Person from '../cards/Person'

const getStyles = () => ({
  container: {
    width: '100%',
    maxWidth: '900px',
    margin: '0 auto'
  },
  title: {
    textAlign: 'center'
  }
})

const ListsContainer = () => {
  const styles = getStyles()
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>People with their cars</h2>
      <DataList
        query={GET_PEOPLE}
        render={(person) => <Person key={person.id} person={person} />}
      />
    </div>
  )
}

export default ListsContainer
