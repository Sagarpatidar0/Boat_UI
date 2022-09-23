import React from 'react'
// import video from '../video.mp4'
function VideoCard({ data }) {
    return (
        <div className='vcard'>
            <div className="video">
                <video playsInline loop autoPlay muted src={data.video}></video>
            </div>
            <div className="vcontant">
                <p className="vtitle">{data.Title.length > 27 ? data.Title.slice(0, 27) + "..." : data.Title}</p>
                <div className="vtitle vcategory">{data.category}</div><hr />
                <p className="arrival vtitle">New Arrival</p>
                <p className="vtitle  vprice">
                    <span className='vpricec'>{data.price}</span>
                    <span className='vpriced'>{data.dis}</span>
                </p>
            </div>
        </div>
    )
}

export default VideoCard