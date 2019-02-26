import React from 'react';
const videoListItem=(props)=>{
	console.log(props,"aslkasalsalsasaskaslasalksalskaLKS")
	return(
		<li className="list-group-item"> 
			<div className="video-list-media">
				<div className="media-left ">
					<img className="media-object"/>
				</div> 
				<div style={{fontSize:"10px"}}>{props.videos.etag}</div>
				 
				<div className="media-body ">
					<div className="media-heading ">

					</div>
				</div>
			</div>
		</li>
	);
}

export default videoListItem;