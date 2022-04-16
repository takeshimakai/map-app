import Image from 'next/image'
import styles from './post.module.css'

import Modal from '../modal'

const Post = ({ post, setViewPost }) => {
  return (
    <Modal closeHandler={() => setViewPost(null)}>
      {post.img &&
        <div className={styles.imgContainer}>
          <Image
            src={`/images/${post.img}`}
            alt=''
            layout='fill'
            objectFit='cover'
          />
        </div>
      }
      <h2 className={styles.title}>{post.title}</h2>
      <p>{post.body}</p>
    </Modal>
  )
}

export default Post