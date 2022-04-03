import React, { useState } from 'react'
import { ImageGrid } from '../comps/ImageGrid'
import { Modal } from '../comps/PostModal/Modal'
import useSubs from '../hooks/useSubs'
import { usePost } from '../hooks/usePost'
import { auth } from '../firebase/config'
import useProfile from '../hooks/useProfile'

export const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const { docs } = useSubs('images')
  const { setLike, addComment, subscribe, unsubscribe } = usePost()
  const { data } = useProfile(auth?.currentUser?.uid)
  let res = docs.filter((i) => i?.email === selectedImage?.email)[0]

  //Сделать сообщение что нет подписок
  return (
    <>
      {docs.length !== 0 ? (
        <>
          <ImageGrid setSelectedImage={setSelectedImage} docs={docs} />
          {selectedImage && (
            <Modal
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
              author={res}
              setLike={setLike}
              currentUser={data}
              isAll={true}
              subscribe={subscribe}
              unsubscribe={unsubscribe}
              addComment={addComment}
            />
          )}
        </>
      ) : (
        'Нет подписок:('
      )}
    </>
  )
}
