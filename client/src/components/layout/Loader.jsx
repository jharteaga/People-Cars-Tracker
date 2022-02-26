import { Spin } from 'antd'

const styles = {
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '2rem'
  }
}

const Loader = ({ size = 'large' }) => {
  return (
    <div style={styles.loading}>
      <Spin size={size} />
    </div>
  )
}

export default Loader
