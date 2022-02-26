import FormsContainer from '../components/layout/FormsContainer'
import ListsContainer from '../components/layout/ListContainer'

const styles = {
  container: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    marginTop: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: '2rem'
  }
}

const Home = () => {
  return (
    <>
      <div style={styles.container}>
        <FormsContainer />
      </div>
      <ListsContainer />
    </>
  )
}

export default Home
