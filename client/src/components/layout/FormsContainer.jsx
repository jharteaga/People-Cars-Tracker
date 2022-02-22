import AddCar from '../forms/AddCar'
import AddPerson from '../forms/AddPerson'

const getStyles = () => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridGap: '2rem'
  },
  formContainer: {
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
})

const FormsContainer = () => {
  const styles = getStyles()
  return (
    <>
      <div style={styles.container}>
        <AddPerson style={styles.formContainer} />
        <AddCar style={styles.formContainer} />
      </div>
    </>
  )
}

export default FormsContainer
