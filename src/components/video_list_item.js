import React from 'react';

const VideoListItem = (props) => {
    const video = props.video;
    const onVideoSelect = props.onVideoSelect;
    const imageUrl = props.video.snippet.thumbnails.default.url;

    /**
     * When one of the list items is selected, we call onVideoSelect which is defined in index.js
     */
    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>

                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;