import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Footer } from '../comps/PostModal/Footer'
import { Status } from '../comps/PostModal/Status'
import { Image } from '../comps/PostModal/Image'
import { Comment } from '../comps/PostModal/Comment'

import { Username } from '../comps/PostModal/Username'
import { usePost } from '../hooks/usePost'
import useProfile from '../hooks/useProfile'

import s from '../comps/PostModal/Post.module.css'
import { motion } from 'framer-motion'
import { Liked } from '../comps/Liked'
import { Comments } from '../comps/PostModal/Comments'
import { auth } from '../firebase/config'

export const Post = () => {
  const { id } = useParams()
  const { docs, setLike, addComment, subscribe } = usePost(id)
  const { data } = useProfile(docs?.uid)
  const currentUser = auth.currentUser.uid

  const [user, setuser] = useState(null)
  const [post, setPost] = useState(null)
  const [selectedPost, setSelectedPost] = useState(null)
  const [comments, setComments] = useState(null)

  useEffect(() => {
    setuser(data)
    setPost(docs)
    setComments(docs?.comments)
  }, [data, id, docs])

  const select = (post) => {
    setSelectedPost(post)
  }

  const onComment = (postId, author, text) => {
    addComment(postId, author, text)
    setComments([...comments, { author, text }])
  }

  return (
    <div className={s.post}>
      <div className={s.postInner}>
        {post ? (
          <>
            <Image img={post.url} />
            <motion.div className={s.postInfo}>
              <Username
                author={user}
                subscribe={subscribe}
                currentUser={currentUser}
              />
              <Status
                setLike={setLike}
                selectedImage={post}
                author={user}
                setSelectedPost={select}
              />
              <Footer author={user} />
              <Comments comments={comments} />
              <Comment
                addComment={onComment}
                author={user}
                postId={post.postId}
              />
            </motion.div>
            {selectedPost && (
              <Liked likedUsers={post.likedUsers} setSelectedPost={select} />
            )}
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}
