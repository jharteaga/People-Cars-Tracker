const styles = {
  header: {
    width: '100%',
    maxWidth: '100%',
    height: '4rem',
    backgroundColor: '#0f1419',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '1rem'
  },
  logo: {
    color: '#eee',
    marginBottom: '0'
  }
}

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>People Cars Tracker</h1>
    </header>
  )
}

export default Header
