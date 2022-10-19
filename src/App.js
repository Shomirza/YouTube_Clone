import React, { useState } from 'react'
import Header from './components/header/header'
import SelectVideo from './components/selectVideo';
import VideoList from './components/VideoList';
import URL from './components/URL'
function App() {
  const [videos, setVideos] = useState([]);
  const [selectVideo, setSelectVideo] = useState({id: {}, snippet: {}})
  async function Submit(searchKey) {
    const {
      data: { items: videos },
    } = await URL.get("search", {
      params: {
        part: "snippet",
        maxResults: 19,
        key: "AIzaSyC_t3gMk9qVG9rVvOpW_TSGlDCFVjq6ZO4",
        q: searchKey,
      },
    });
    console.log(videos);
    setVideos(videos);
    setSelectVideo(videos[0])
  }
  return (
      <>
      <div>
        <Header Submit={Submit}/>
      </div>
      <div className="d-flex sides">
        <SelectVideo video={selectVideo}/>
        <VideoList videos={videos} setSelectVideo={setSelectVideo}/>
      </div>
      </>
  )
}
export default App;