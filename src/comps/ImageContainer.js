import React from 'react'
import Camera from './Camera'
import Delete from './Delete'

export const ImageContainer = ({ avatar, deleteImage, setImg }) => {
  return (
    <div className="img_container ">
      <img
        src={
          avatar ||
          'https://imdezcode.files.wordpress.com/2020/02/imdezcode-logo.png'
        }
        alt="avatar"
      />
      <div className="overlay">
        {deleteImage && setImg && (
          <div>
            <label htmlFor="photo">
              <Camera />
            </label>
            {avatar ? <Delete deleteImage={deleteImage} /> : null}
            <input
              type="file"
              id="photo"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={(e) => setImg(e.target.files[0])}
            />
          </div>
        )}
      </div>
    </div>
  )
}
