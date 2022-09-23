import React from "react"
import VideoSlides from "./VideoSlides"
import video_data from '../Data/boatvideo.json'
function Videofast() {
  return (
    <div>
        <VideoSlides video={video_data} start={0} end={8}/>
    </div>
  )
}

export default Videofast