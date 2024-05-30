import React from 'react'
import './styles/ImageGeneration.css'
import SendIcon from '@mui/icons-material/Send'
import { TextareaAutosize } from '@mui/material'
function ImageGeneration() {
  return (
    <>
      <div className="main">
        <div className="show-image">
          {/* <img
            src="https://cdn.discordapp.com/attachments/940898967959523358/1090662952207654973/background.gif?ex=6659f087&is=66589f07&hm=aee0b54dce1c7f5a628b9aafd76dfed33de298ee278bf3f9d7c953abb64a141d&"
            alt=""
          /> */}
        </div>
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
