import React from 'react';
import VideoListItem from './video_list_item.js';

const VideoList = (props) => {
  const videoItem = props.videos.map((video) => {
    return <VideoListItem video={video} />
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItem}
    </ul>
  )
}

export default VideoList;
