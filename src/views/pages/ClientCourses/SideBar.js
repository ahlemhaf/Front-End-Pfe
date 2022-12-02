import React from 'react'

function SideBar() {
    return (
        <nav className="nav flex-column  bg-dark" style={{height:'450px',width:'150px' , overflowX:true}}>
            <button className="btn text-white rounded-0" >Link</button>
        </nav>
    )
}

export default SideBar