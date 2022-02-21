import './App.css'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
})

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h1>People Cars Tracker</h1>
    </div>
  </ApolloProvider>
)

export default App
