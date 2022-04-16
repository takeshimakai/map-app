import dynamic from 'next/dynamic'
import { useContext, useState } from 'react'
import StatusContext from '../context/StatusContext'
import fakePosts from '../data/posts.json'
import styles from '../styles/Home.module.css'

import Layout from '../components/layout'
import PostPreview from '../components/postPreview'
import Post from '../components/post'
import PostForm from '../components/postForm'

const Map = dynamic(
  () => import ('../components/map/index'),
  { ssr: false }
)

export default function Home() {
  const { isLoggedIn } = useContext(StatusContext)

  const [posts, setPosts] = useState(fakePosts)
  const [viewPost, setViewPost] = useState(null)
  const [clickCoords, setClickCoords] = useState(null)

  return (
    <Layout>
      <div className={styles.map}>
        <Map posts={posts} clickCoords={clickCoords} setClickCoords={setClickCoords} />
      </div>
      <div className={styles.container}>
        {isLoggedIn &&
          <section className={styles.previewContainer}>
            {posts.map(post => (
              <PostPreview key={post.id} post={post} setViewPost={setViewPost} />
            ))}
          </section>
        }
        {viewPost && <Post post={viewPost} setViewPost={setViewPost} />}
        {clickCoords && <PostForm clickCoords={clickCoords} setClickCoords={setClickCoords} setPosts={setPosts} />}
      </div>
    </Layout>
  )
}
