import React, { useState } from 'react'
import { Loading } from '../comps/Loading'
import useSubs from '../hooks/useSubs'
import { usePost } from '../hooks/usePost'
import { auth } from '../firebase/config'
import useProfile from '../hooks/useProfile'
import { ImageContent } from '../comps/ImageContent'

export const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const { docs, loading } = useSubs('images')
  const { setLike, addComment, subscribe, unsubscribe } = usePost()
  const { data } = useProfile(auth?.currentUser?.uid)

  let res = docs.filter((i) => i?.email === selectedImage?.email)[0]

  if (loading) {
    return <Loading />
  }

  //Сделать сообщение что нет подписок

  return (
    <>
      {docs.length !== 0 ? (
        <ImageContent
          setSelectedImage={setSelectedImage}
          docs={docs}
          selectedImage={selectedImage}
          loading={loading}
          author={res}
          currentUser={data}
          isAll={true}
          subscribe={subscribe}
          unsubscribe={unsubscribe}
          setLike={setLike}
          addComment={addComment}
        />
      ) : (
        'Нет подписок:('
      )}
    </>
  )
}
