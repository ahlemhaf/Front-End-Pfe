import React from 'react'

function SideBar() {
    return (
        <nav class="nav flex-column">
            <a class="nav-link active" aria-current="page" href="#">Active</a>
            <a class="nav-link" href="#">Link</a>
            <a class="nav-link" href="#">Link</a>
            <a class="nav-link disabled">Disabled</a>
        </nav>
    )
}

export default SideBar