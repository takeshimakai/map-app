import styles from './modal.module.css'

const Modal = ({ children, closeHandler }) => {
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={closeHandler}>
          &#x2715;
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal