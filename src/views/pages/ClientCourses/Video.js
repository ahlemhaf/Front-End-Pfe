import { cilTv } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CHeaderDivider } from '@coreui/react'
import React from 'react'
import ReactPlayer from 'react-player'

function Video(props) {
  return (
    <div className='bg-white w-100'>
      <h5 className='text-dark text-uppercase mb-5'><CIcon icon={cilTv} size='lg'></CIcon> {props.name}</h5>
      <CHeaderDivider></CHeaderDivider>
      <ReactPlayer
        playing
        controls
        className='react-player'
        url={props.content}
        width='100%'
      ></ReactPlayer>
    </div>
  )
}

export default Video