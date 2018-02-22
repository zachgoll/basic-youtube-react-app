import React from 'react';

/**
 * We are pulling off video from props here
 * This is equivalent to passing "props" into the function
 * and then saying "props.video"
 */
const VideoDetail = ({video}) => {

    // Need this check because VideoDetail will load immediately and the video
    // HTTP request takes time.  This causes an error.
    if (!video) {
        return <div>Loading...</div>;
    }

    // Generate an embed video URL
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;