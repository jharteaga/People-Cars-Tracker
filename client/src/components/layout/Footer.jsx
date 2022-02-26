const styles = {
  footer: {
    width: '100%',
    maxWidth: '100%',
    height: '3rem',
    backgroundColor: '#0f1419',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '1rem'
  },
  attribution: {
    color: '#eee',
    marginBottom: '0'
  }
}

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.attribution}>
        Copyright&copy; 2022 Jose Arteaga, Langara College
      </p>
    </footer>
  )
}

export default Footer
