import './App.css'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import FormsContainer from './components/layout/FormsContainer'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
})

const styles = {
  container: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    marginTop: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '2rem'
  }
}

const App = () => (
  <ApolloProvider client={client}>
    <div style={styles.container}>
      <h1 style={styles.title}>People Cars Tracker</h1>
      <FormsContainer />
    </div>
  </ApolloProvider>
)

export default App
