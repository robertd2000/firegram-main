import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { ImageContent } from '../comps/ImageContent'
import { Loading } from '../comps/Loading'
import { Sidenav } from '../comps/Sidenav'
import Title from '../comps/Title'
import { UploadForm } from '../comps/UploadForm'
import { auth } from '../firebase/config'
import useFirestore from '../hooks/useFirestore'
import { usePost } from '../hooks/usePost'

import useProfile from '../hooks/useProfile'

export const Profile = () => {
  const { id } = useParams()

  const [selectedImage, setSelectedImage] = useState(null)
  const [user, setuser] = useState(null)

  const [docsList, setDocsList] = useState([])

  const { docs, loading } = useFirestore('images', id)
  const { data } = useProfile(id)
  const { setLike, addComment } = usePost(id)

  useEffect(() => {
    setuser(data)
    setDocsList(docs)
  }, [data, id, docs])

  if (loading) {
    return <Loading />
  }

  return (
    <div>
      {user && id ? (
        <>
          <Sidenav user={user} active={'profile'} id={id} />
          {id === auth?.currentUser?.uid && (
            <>
              <Title />
              <UploadForm />
            </>
          )}

          <ImageContent
            docs={docsList}
            currentUser={data}
            selectedImage={selectedImage}
            loading={loading}
            author={user}
            setLike={setLike}
            addComment={addComment}
            setSelectedImage={setSelectedImage}
          />
        </>
      ) : (
        'No data'
      )}
    </div>
  )
}
