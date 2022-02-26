import './App.css'
import { Routes, Route } from 'react-router-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import Home from './pages/Home'
import Show from './pages/Show'
import NotFound from './pages/NotFound'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

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
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/people/:id" element={<Show />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </ApolloProvider>
)

export default App
