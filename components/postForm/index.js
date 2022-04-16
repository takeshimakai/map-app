import { useState } from 'react'
import styles from './postForm.module.css'

import Modal from '../modal'

const PostForm = ({ clickCoords, setClickCoords, setPosts }) => {
  const [input, setInput] = useState({
    author: '',
    title: '',
    body: '',
    img: '',
    coords: { lat: clickCoords.lat, lng: clickCoords.lng }
  })

  const handleInput = (e) => {
    const { name, value } = e.target
    setInput(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setPosts(prev => ([...prev, input]))
  }

  return (
    <Modal closeHandler={() => setClickCoords(null)}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.titleContainer}>
          <label htmlFor='title'>Title</label>
          <input id='title' name='title' type='text' value={input.title} onChange={handleInput} />
        </div>
        <textarea
          className={styles.textarea}
          name='body'
          placeholder="What's happening?"
          value={input.body}
          onChange={handleInput}
        />
        <button className={styles.button}>Post</button>
      </form>
    </Modal>
  )
}

export default PostForm