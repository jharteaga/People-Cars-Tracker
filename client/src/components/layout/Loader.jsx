import { Spin } from 'antd'

const styles = {
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '2rem'
  }
}

const Loader = () => {
  return (
    <div style={styles.loading}>
      <Spin size="large" />
    </div>
  )
}

export default Loader
