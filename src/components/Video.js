import React from 'react'
import video from '../assets/video-header.mp4'


export default function Video() {
  return (
      <video
      autoPlay
      loop
      muted
      id="header-video">
        <source src={video} type="video/mp4" />
      </video>
  )
}
