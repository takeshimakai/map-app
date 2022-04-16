import styles from './postPreview.module.css'

const PostPreview = ({ post, setViewPost }) => {
  return (
    <article className={styles.article} onClick={() => setViewPost(post)}>
      <h2 className={styles.title}>{post.title}</h2>
      <p className={styles.body}>{post.body}</p>
    </article>
  )
}

export default PostPreview