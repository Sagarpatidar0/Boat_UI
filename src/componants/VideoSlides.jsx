import React from 'react'
import VideoCard from './VideoCard'


function VideoSlides({ video, start, end }) {
  var video_datas = []
  for (let index = start; index < end; index++) {
    video_datas.push(video[index])
  }
  return (
    <div className='videoslider' style={{ display: "flex", overflowX: "scroll", justifyItems:"center" }}>
      {
        video_datas.map((video_data,i)=>{
           return <VideoCard data={video_data} key={i} />
        }
        )
      }
      
    </div>
  )
}

export default VideoSlides