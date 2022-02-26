import React from 'react'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '2rem'
  },
  title: {
    fontWeight: 'bold',
    fontSize: '5rem',
    marginBottom: '0'
  }
}

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <h2>Page not found</h2>
    </div>
  )
}

export default NotFound
