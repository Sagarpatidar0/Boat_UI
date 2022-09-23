import React from "react"
import VideoSlides from "./VideoSlides"
import video_data from '../Data/boatvideo.json'

function Videosecond() {
  return (
    <div style={{display:'flex',justifyContent:'center'}}>
        <VideoSlides video={video_data} start={8} end={12}/>
    </div>
  )
}

export default Videosecond