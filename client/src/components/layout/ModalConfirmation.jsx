import { Modal } from 'antd'

const ModalConfirmation = ({ isVisible, onChange, onConfirm, message }) => {
  const handleOk = () => {
    onConfirm()
    onChange(false)
  }

  const handleCancel = () => {
    onChange(false)
  }

  return (
    <Modal
      title="Remove confirmation"
      visible={isVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p>{message}</p>
    </Modal>
  )
}

export default ModalConfirmation
