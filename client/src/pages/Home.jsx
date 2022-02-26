import FormsContainer from '../components/layout/FormsContainer'
import ListsContainer from '../components/layout/ListContainer'

const styles = {
  container: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    marginTop: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: '2rem'
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '2rem'
  }
}

const Home = () => {
  return (
    <>
      <div style={styles.container}>
        <h1 style={styles.title}>People Cars Tracker</h1>
        <FormsContainer />
      </div>
      <ListsContainer />
    </>
  )
}

export default Home
