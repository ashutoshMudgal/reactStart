import React from "react";

const VideoDetail = (props) =>{
    const videoId=props.videos.id.videoId;
    const url= `https://www.youtube.com/embed/${videoId}`
    return(
        <div className = "vodeo-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className = "embed-responsive-item"></iframe>
            </div>
            <div className = "details">
            <div>{props.videos.snippet.title}</div>
            <div>{props.videos.snippet.description}</div>
            </div>
        </div>
    )
}