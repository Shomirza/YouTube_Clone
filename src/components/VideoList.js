import React from 'react'
import SideVideo from './sideVideo';
function VideoList({videos, setSelectVideo}) {
    const list = videos.map((item, index)=>(
        <SideVideo key={index} video={item} onSelect={setSelectVideo}/>
    ))
  return (
    <div className="videolist">
        {list}
    </div>
  )
}
export default VideoList;