import { useQuery } from '@apollo/client'
import { GET_PEOPLE } from '../../queries'
import AddCar from '../forms/AddCar'
import AddPerson from '../forms/AddPerson'
import Loader from './Loader'

const getStyles = () => ({
  container: {
    display: 'flex',
    gap: '2rem'
  },
  formContainer: {
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
})

const FormsContainer = () => {
  const { loading, data } = useQuery(GET_PEOPLE)
  const styles = getStyles()

  if (loading) return <Loader />

  return (
    <div style={styles.container}>
      <AddPerson style={styles.formContainer} />
      {data?.people.length ? <AddCar style={styles.formContainer} /> : null}
    </div>
  )
}

export default FormsContainer
