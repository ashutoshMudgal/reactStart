import React from 'react';
import VideoListItem from './video_list_item.js';

const videoList=(props)=>{
	// const videos= props.videos;
	const videoItems = props.videos.map((videos)=>{
		return <VideoListItem
		onVideoSelect={props.onVideoSelect}
		 key={videos.etag}
		  videos={videos}/>
	})
	return(
		<ul className='col-md-4 list-group'>
		{videoItems}
		</ul>
	);
}

export default videoList;