import React, { useRef, useState } from 'react'
import './Video.css'
import VideoFooter from './VideoFooter'

function Video() {
    const [playing, setPlaying ] = useState(false)
    const videoRef = useRef(null)

    const onVideoClick = () => {
        if(playing){
            videoRef.current.pause()
            setPlaying(false)
        } else {
            videoRef.current.play()
            setPlaying(true)
        }
    }

	return (
		<div className='video'>
			<video
				className='video-player'
                loop
                ref={videoRef}
                onClick={onVideoClick}
				src='https://v16m.tiktokcdn.com/9ba5c52e195ad3634cc99dec4a8c93fb/60b90f56/video/tos/useast2a/tos-useast2a-ve-0068c003/a7b4de2302454a8e90e1ffd270a30634/?a=1233&br=3588&bt=1794&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=2021060311195701019018515244021E79&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3BmPGVmc3d4NTMzNzczM0ApaTpmNDs8PDw4NzdpaDlmZWdfaGAvXmFjLmFgLS1kMTZzczFjNDU2XjRiMy8tMDIyNGE6Yw%3D%3D&vl=&vr='
			></video>
            <VideoFooter channel='keniossai' description='The slack-clone' song='This is heaven' />
		</div>
	)
}

export default Video
