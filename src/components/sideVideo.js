import React from 'react'
function SideVideo({video, onSelect}) {
  return (
    <>
    <div onClick={()=> onSelect(video)} className="d-flex next">
        <img src={video.snippet.thumbnails.default.url} className="pic" alt="" />
        <div className="ttext">
        <p className="text-white ptitle mb-0 mt-1">
            {video.snippet.title}
        </p>
        <p className="text-info ptitle mb-0 mt-2">
            {video.snippet.channelTitle}
        </p>
        <p className="text-secondary ptitle mt-1">
            {video.snippet.publishTime}
        </p>
        </div>
    </div>
    </>
  )
}
export default SideVideo;