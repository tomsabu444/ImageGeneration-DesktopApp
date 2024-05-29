import React from 'react'
import './styles/ImageGeneration.css'
import SendIcon from '@mui/icons-material/Send'
import { TextareaAutosize } from '@mui/material'
function ImageGeneration() {
  return (
    <>
      <div className="main-container">
        <div className="image-promte-box">
          <div className="input-place">
            <TextareaAutosize
              id="inputpost"
              placeholder="What's happening?!"
              className="send-input"
              autoFocus
            />

            <div className="send">
              <SendIcon className="send-icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ImageGeneration
