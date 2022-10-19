import React, { useState } from 'react'
import Logo from '../header/logo1.png'
import Ibs from '../header/ibs.jpg'
import Sidebar from '../sidebar/sidebar';
function Header({Submit}) {
    const [menu, setMenu] = useState(false);
    const [search, setSearch] = useState("");
    function handleChange(event) {
        setSearch(event.target.value)
    }
    function handlePress(event) {
        if(event.key === "Enter"){
            Submit(search);
            document.title = search + " You Tube"
        }
    }
  return (
    <div className="container-fluid">
        <div className='row'>
            <div className='col-12 header d-flex justify-content-between'>
            <div className="side1 d-flex w-25 align-items-center">
            <button onClick={()=> setMenu(p => !p)} className='bg-dark border-0'><i className="bi bi-list text-white h3 m-2"></i></button>
            <img className='logtube' src={Logo} alt="" />
        </div>
        <div className="side2 w-50">
            <div className='search d-flex align-items-center'>
                <input onKeyPress={handlePress} onChange={handleChange} type="text" placeholder='Search' className='w-75 inp-search text-white'/>
                <i className="bi bi-search text-white h6 d-flex justify-content-center align-items-center mt-2 inp-search2"></i>
                <i className="bi bi-mic-fill text-white mic h6 d-flex justify-content-center align-items-center mt-2"></i>
            </div>
        </div>
        <div className="side3">
            <div className="icon1">
            <i className="bi bi-camera-video text-white h5 m-2"></i>
            <i className="bi bi-grid-3x3-gap text-white h5 m-2"></i>
            <i className="bi bi-bell text-white h5 m-2"></i>
            <img className='ibslogo' src={Ibs} alt="" />
            </div>
        </div>
            </div>
        </div>
        <Sidebar menu={menu}/>
    </div>
  )
}
export default Header;