import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { ImageGrid } from '../comps/ImageGrid'
import { Modal } from '../comps/PostModal/Modal'
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

  const { docs } = useFirestore('images', id)
  const { data } = useProfile(id)
  const { setLike, addComment } = usePost(id)

  useEffect(() => {
    setuser(data)
    setDocsList(docs)
  }, [data, id, docs])

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

          <div>
            <ImageGrid
              setSelectedImage={setSelectedImage}
              // id={id}
              docs={docsList}
            />
            {selectedImage && (
              <Modal
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
                author={user}
                setLike={setLike}
                addComment={addComment}
                currentUser={data}
              />
            )}
          </div>
        </>
      ) : (
        'No data'
      )}
    </div>
  )
}
