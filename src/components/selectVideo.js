import React from 'react'
import Youtube from './header/youtube.webp'
function SelectVideo({video: {id: {videoId}, snippet: {description, title, channelTitle}}}) {
    if(!videoId) return <img src={Youtube} className="ytube" alt="" />
    const videoSrc = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className='headd'>
        <iframe className="head m-4 mb-0 mt-3" allowFullScreen src={videoSrc}/>
        <div className="coment m-4 mt-1">
        <h5 className='text-info mb-1'>{title}</h5>
        <h6 className='text-white mb-1'>{description}</h6>
        <h6 className='text-secondary'>{channelTitle}</h6>
        </div>
    </div>
  )
}
export default SelectVideo;