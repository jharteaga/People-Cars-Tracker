import './App.css'
import { Routes, Route } from 'react-router-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import Home from './pages/Home'
import Show from './pages/Show'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          people: {
            merge(existing, incoming) {
              return incoming
            }
          },
          cars: {
            merge(existing, incoming) {
              return incoming
            }
          }
        }
      }
    }
  })
})

const App = () => (
  <ApolloProvider client={client}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/people/:id" element={<Show />} />
      <Route
        path="*"
        element={
          <>
            <h1>404</h1>
          </>
        }
      />
    </Routes>
  </ApolloProvider>
)

export default App
