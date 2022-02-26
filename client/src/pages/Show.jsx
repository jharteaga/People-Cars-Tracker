import { Link } from 'react-router-dom'
import { LeftOutlined } from '@ant-design/icons'
import { useQuery } from '@apollo/client'
import { Button } from 'antd'
import { useParams } from 'react-router-dom'
import Person from '../components/cards/Person'
import { GET_PERSON_WITH_CARS } from '../queries'

const styles = {
  container: {
    width: '100%',
    maxWidth: '900px',
    margin: '1rem auto'
  },
  topContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  },
  title: {
    fontSize: '2rem',
    textAlign: 'center',
    marginBottom: '0'
  }
}

const Show = () => {
  const { id } = useParams()
  const { loading, error, data } = useQuery(GET_PERSON_WITH_CARS, {
    variables: { id }
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error {error.message}</p>

  return (
    <div style={styles.container}>
      <div style={styles.topContainer}>
        <Link to="/">
          <Button icon={<LeftOutlined />}>Go back home</Button>
        </Link>
        <h2 style={styles.title}>Details Page</h2>
      </div>
      <Person person={data.personWithCars} isReadable={true} />
    </div>
  )
}

export default Show
