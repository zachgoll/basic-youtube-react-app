import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';

const API_KEY = 'AIzaSyAgtdetPiddmq0R0NHVYRJ78al4UFXW6MM';

// 1. Create React component which will produce HTML
// This is a class, not an instance
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('pga tour honda classic');

    }

    videoSearch(term) {
        // Constructor runs on app load
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        // Throttles the videoSearch function so it can only be called once every 300 milliseconds
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
                    videos={this.state.videos} />
            </div>
        );
    }
}

// 2. Insert component generated HTML and put into the DOM (page)
// Can use <App /> or <App></App>
// Render the HTML, and then put it in the container div that lives in index.html
ReactDOM.render(<App />, document.querySelector('.container'));