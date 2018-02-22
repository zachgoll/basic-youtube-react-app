import React from 'react';
import VideoListItem from './video_list_item';

// We can use functional component because we aren't using state here
// props comes from the data that was injected from index.js
const VideoList = (props) => {

    /** 
     * props is the original video object from index.js which we are now
     * injecting into the VideoListItem component
     * Once in VideoListItem, it shows up as props and can be rendered into a single
     * video list item
     * 
     * It is a good practice to always add a key attribute to the individual item in array
    */
    const videoItems = props.videos.map((video) => {
        return <VideoListItem
            onVideoSelect={props.onVideoSelect}
            key={video.etag} 
            video={video} />;
    });


    // React knows that videoItems is an array of something, so will render all the lis
    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    )
}

export default VideoList;