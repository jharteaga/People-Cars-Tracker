import DataList from '../lists/DataList'
import { GET_PEOPLE, GET_CARS } from '../../queries'
import Person from '../listItems/Person'
import Car from '../listItems/Car'

const getStyles = () => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridGap: '1rem',
    justifyItems: 'center',
    width: '100%',
    maxWidth: '95%',
    margin: '0 auto'
  }
})

const ListsContainer = () => {
  const styles = getStyles()
  return (
    <>
      <div style={styles.container}>
        <DataList
          type="people"
          query={GET_PEOPLE}
          render={(person) => <Person key={person.id} person={person} />}
        />
        <DataList
          type="cars"
          query={GET_CARS}
          render={(car) => <Car key={car.id} car={car} />}
        />
      </div>
    </>
  )
}

export default ListsContainer
