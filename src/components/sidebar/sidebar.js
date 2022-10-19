import React from 'react'
import { MdSubscriptions  } from 'react-icons/md';
import { AiFillHome  } from 'react-icons/ai';
import { MdOutlineVideoLibrary } from 'react-icons/md';
import { RiHistoryLine } from 'react-icons/ri';
import { RiVideoLine } from 'react-icons/ri';
import { MdOutlineWatchLater } from 'react-icons/md';
import { BiLike } from 'react-icons/bi';
import { MdExpandMore } from 'react-icons/md';
import { FaRegCompass } from 'react-icons/fa';
import { MdSlowMotionVideo } from 'react-icons/md';

function Sidebar({menu}) {
  return (
      <div className='sidebar bg-dark' style={{left: `${menu ? '0' : '-350px'}`}}>
        <h4 className='text-white baricon mt-4'> <AiFillHome className="iconn"/>Home</h4>
        <h4 className='text-white baricon'><FaRegCompass className="iconn"/>Explore</h4>
        <h4 className='text-white baricon'><MdSlowMotionVideo className="iconn"/>Shorts</h4>
        <h4 className='text-white baricon'> <MdSubscriptions className="iconn"/>Subscriptions</h4>
        <h4 className='text-white baricon'> <MdOutlineVideoLibrary className="iconn"/>Library</h4>
        <h4 className='text-white baricon'> <RiHistoryLine className="iconn"/>History</h4>
        <h4 className='text-white baricon'> <RiVideoLine className="iconn"/>Your videos</h4>
        <h4 className='text-white baricon'> <MdOutlineWatchLater className="iconn"/>Watch Later</h4>
        <h4 className='text-white baricon'> <BiLike className="iconn"/>Liked videos</h4>
        <h4 className='text-white baricon'> <MdExpandMore className="iconn"/>More</h4>
      </div>
  )
}
export default Sidebar;